export const characterSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      example: 1,
    },
    original_character_id: {
      type: "number",
      example: 10,
    },
    name: {
      type: "string",
      example: "Rick Sanchez",
    },
    species: {
      type: "string",
      example: "Human",
    },
    gender: {
      type: "string",
      example: "Male",
    },
    origin: {
      type: "string",
      example: "Earth (C-137)",
    },
    location: {
      type: "string",
      example: "Citadel of Ricks",
    },
    image: {
      type: "string",
      example: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    status: {
      type: "string",
      example: "Alive",
    },
    user_id: {
      type: "number",
      example: 2,
    },
    created_at: {
      type: "string",
      format: "date-time",
    },
  },
};
