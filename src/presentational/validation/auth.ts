import { z } from "zod";

export const AuthSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must have at least 6 characters"),
});
