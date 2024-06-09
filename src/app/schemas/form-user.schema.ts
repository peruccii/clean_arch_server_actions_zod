import { z } from "zod";

export const formUserSchema = z.object({
  email: z
    .string()
    .max(100, "Digite um email de no máximo 100 caracteres")
    .email("Digite um email válido"),
  password: z.string().max(50, "Digite uma senha de no máximo 50 caracteres"),
});
