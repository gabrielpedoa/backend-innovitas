export const paginatedCharactersSchema = {
  type: "object",
  properties: {
    info: {
      type: "object",
      properties: {
        count: {
          type: "number",
          example: 1,
        },
        pages: {
          type: "number",
          example: 1,
        },
        next: {
          type: "string",
          example: "https://rickandmortyapi.com/api/character?page=3",
        },
        prev: {
          type: "string",
          example: "https://rickandmortyapi.com/api/character?page=1",
        },
        results: {
          type: "array",
          items: {
            $ref: "#/components/schemas/characterSchema",
          },
        },
      },
    },
  },
};
