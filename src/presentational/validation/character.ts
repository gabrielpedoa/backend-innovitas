import { z } from "zod";

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string().nonempty("Character name is required"),
  species: z.string().nonempty("Species is required"),
  gender: z.string().nonempty("Gender is required"),
  origin: z.object({
    name: z.string(),
    url: z.string(),
  }),
  location: z.object({
    name: z.string(),
    url: z.string(),
  }),
  image: z.string().optional(),
  status: z.string().nonempty("Status is required"),
  user_id: z.number({
    error: "Character must belong to a user",
  }),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

export const UpdateCharacterSchema = CharacterSchema.partial();
