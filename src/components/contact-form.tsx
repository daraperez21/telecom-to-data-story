import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/contact.schemas";
import { submitContact } from "@/lib/contact.functions";

const MESSAGE_MAX = 2000;

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [honeypot, setHoneypot] = useState("");
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", requestingServices: false, message: "" },
  });

  const requesting = watch("requestingServices");
  const used = watch("message")?.length ?? 0;

  async function onSubmit(values: ContactInput) {
    setServerError(null);
    const result = await send({ data: { ...values, website: honeypot } });
    if (!result.ok) {
      setServerError(result.error);
      return;
    }
    reset();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-md border border-primary/40 bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 text-2xl font-medium">¡Mensaje enviado!</h3>
        <p className="mt-3 text-muted-foreground">
          Gracias por escribirme. Tu mensaje se ha recibido correctamente.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSent(false);
            setHoneypot("");
          }}
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 border-t-2 border-primary pt-8"
    >
      <div className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">
              Nombre
            </Label>
            <Input
              id="name"
              autoComplete="name"
              placeholder="Tu nombre"
              maxLength={100}
              aria-invalid={Boolean(errors.name)}
              className="mt-2"
              {...register("name")}
            />
            {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="tucorreo@ejemplo.com"
              maxLength={255}
              aria-invalid={Boolean(errors.email)}
              className="mt-2"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* The control must not sit inside its own label: the label re-forwards the
            click and the checkbox would toggle twice and look frozen. */}
        <div className="flex items-start gap-3 border-y border-border bg-secondary/60 p-4 transition has-[:focus-visible]:border-primary has-[:checked]:border-primary">
          <Checkbox
            id="requestingServices"
            className="mt-1"
            checked={requesting}
            onCheckedChange={(checked) => setValue("requestingServices", checked === true)}
          />
          <label htmlFor="requestingServices" className="flex-1 cursor-pointer">
            <span className="block font-medium">Quiero solicitar tus servicios profesionales</span>
            <span className="mt-1 block text-sm text-muted-foreground">
              {requesting
                ? "Perfecto: cuéntame en el mensaje qué necesitas y en qué plazo."
                : "Marca esta casilla si buscas contratar un proyecto o una asesoría."}
            </span>
          </label>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <Label htmlFor="message" className="text-sm font-medium">
              Mensaje
            </Label>
            <span className={used > MESSAGE_MAX - 100 ? "text-sm text-destructive" : "text-sm text-muted-foreground"}>
              {used}/{MESSAGE_MAX}
            </span>
          </div>
          <Textarea
            id="message"
            rows={5}
            placeholder={
              requesting
                ? "Hola Dara, busco apoyo con… (alcance, fechas, contexto)"
                : "Escribe aquí tu pregunta o comentario"
            }
            maxLength={MESSAGE_MAX}
            aria-invalid={Boolean(errors.message)}
            className="mt-2"
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        {/* Honeypot: hidden from people, filled by bots. */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        {serverError && <p className="text-sm text-destructive">{serverError}</p>}

        <Button type="submit" disabled={isSubmitting} className="w-full gap-2 md:w-auto">
          <Send className="h-4 w-4" />
          {isSubmitting ? "Enviando…" : "Enviar mensaje"}
        </Button>
      </div>
    </form>
  );
}
