export const userSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      example: 1,
    },
    name: {
      type: "string",
      example: "Gabriel",
    },
    email: {
      type: "string",
      example: "gabriel@email.com",
    },
    characters: {
      type: "array",
      items: {
        $ref: "#/components/schemas/characterSchema",
      },
    },
    created_at: {
      type: "string",
      format: "date-time",
    },
    updated_at: {
      type: "string",
      format: "date-time",
    },
  },
};
