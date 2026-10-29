import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";
import { contactSchema, type ContactInput } from "./contact.schemas";

// Server-side client on the publishable key: the insert runs under the anon role,
// so the table's insert-only policy is the real boundary. Never the admin client here.
function createServerClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) throw new Error("Missing Supabase environment variables for contact submissions.");

  return createClient<Database>(url, key, {
    global: {
      fetch: (input, init) => {
        const headers = new Headers(
          typeof Request !== "undefined" && input instanceof Request ? input.headers : undefined,
        );
        if (init?.headers) {
          new Headers(init.headers).forEach((value, header) => headers.set(header, value));
        }
        // Publishable keys are opaque strings, not bearer JWTs.
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
  });
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => data as ContactInput)
  .handler(async ({ data }) => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      return { ok: false as const, error: "Revisa los datos y vuelve a intentarlo." };
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      requesting_services: parsed.data.requestingServices,
      message: parsed.data.message,
    });

    if (error) {
      console.error(error);
      return { ok: false as const, error: "No se pudo enviar tu mensaje. Inténtalo de nuevo." };
    }

    return { ok: true as const };
  });
