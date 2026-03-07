import { z } from "zod";

export const CharacterSchema = z.object({
  id: z.number().optional(),
  original_character_id: z.number({
    error: "original_character_id is required",
  }),
  name: z.string().nonempty("Character name is required"),
  species: z.string().nonempty("Species is required"),
  gender: z.string().nonempty("Gender is required"),
  origin: z.string().optional(),
  location: z.string().optional(),
  image: z.string().optional(),
  status: z.string().nonempty("Status is required"),
  user_id: z.number({
    error: "Character must belong to a user",
  }),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

export const UpdateCharacterSchema = CharacterSchema.partial();
