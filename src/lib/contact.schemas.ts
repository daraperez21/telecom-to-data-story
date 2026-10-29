import { z } from "zod";

// Shared by the browser form and the server handler: the same rules run on both sides.
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Escribe tu nombre (mínimo 2 caracteres)." })
    .max(100, { message: "El nombre no puede pasar de 100 caracteres." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Escribe tu correo electrónico." })
    .email({ message: "Ese correo no parece válido." })
    .max(255, { message: "El correo no puede pasar de 255 caracteres." }),
  requestingServices: z.boolean(),
  message: z
    .string()
    .trim()
    .min(10, { message: "Cuéntame un poco más (mínimo 10 caracteres)." })
    .max(2000, { message: "El mensaje no puede pasar de 2000 caracteres." }),
  // Honeypot: real visitors never see or fill this field.
  website: z.literal("").optional(),
});

export type ContactInput = z.input<typeof contactSchema>;
