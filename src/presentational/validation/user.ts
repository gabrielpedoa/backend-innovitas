import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty("Name is required"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must have at least 6 characters"),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

export const UpdateUserSchema = UserSchema.partial();
