import { describe, expect, it } from "vitest";

import { contactSchema } from "@/lib/contact.schemas";

// The same schema runs in the browser form and in the server handler, so these
// cases are the rules a visitor's message has to pass before it is stored.
const valid = {
  name: "Dara Judith",
  email: "dara@ejemplo.com",
  requestingServices: true,
  message: "Hola Dara, busco apoyo con un proyecto de fibra óptica.",
};

describe("Contact form rules", () => {
  it("accepts a complete request for professional services", () => {
    const result = contactSchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.requestingServices).toBe(true);
      expect(result.data.email).toBe("dara@ejemplo.com");
    }
  });

  it("accepts a message that does not ask for services", () => {
    const result = contactSchema.safeParse({ ...valid, requestingServices: false });
    expect(result.success).toBe(true);
  });

  it("rejects a name shorter than 2 characters", () => {
    const result = contactSchema.safeParse({ ...valid, name: "D" });
    expect(result.success).toBe(false);
  });

  it("rejects a malformed email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "no-es-un-correo" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, email: "" }).success).toBe(false);
  });

  it("rejects a message under 10 characters or over 2000", () => {
    expect(contactSchema.safeParse({ ...valid, message: "hola" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, message: "a".repeat(2001) }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, message: "a".repeat(2000) }).success).toBe(true);
  });

  it("rejects a submission where the hidden bot field is filled", () => {
    expect(contactSchema.safeParse({ ...valid, website: "http://spam.example" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, website: "" }).success).toBe(true);
  });
});
