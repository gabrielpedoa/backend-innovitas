export const dashboardSchema = {
  type: "object",
  properties: {
    totalCharacters: {
      type: "number",
      example: 826,
    },
    totalEpisodes: {
      type: "number",
      example: 51,
    },
    totalLocations: {
      type: "number",
      example: 126,
    },

    userTotalCharacters: {
      type: "number",
      nullable: true,
      example: 12,
    },

    myFavoritesCharacters: {
      type: "array",
      nullable: true,
      items: {
        $ref: "#/components/schemas/characterSchema",
      },
    },
  },
};