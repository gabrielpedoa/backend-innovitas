import { defaultResponses } from "./responses";

export const characterPaths = {
  "/characters": {
    get: {
      tags: ["Characters"],
      summary: "List characters",
      parameters: [
        {
          name: "page",
          in: "query",
          schema: { type: "number", example: 1 },
        },
        {
          name: "name",
          in: "query",
          schema: { type: "string", example: "rick" },
        },
      ],
      responses: {
        200: {
          description: "Characters loaded",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/paginatedCharactersSchema",
              },
            },
          },
        },
        ...defaultResponses,
      },
    },

    post: {
      tags: ["Characters"],
      summary: "Create character",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/characterSchema",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Character created",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/characterSchema",
              },
            },
          },
        },
        ...defaultResponses,
      },
    },
  },

  "/characters/{id}": {
    get: {
      tags: ["Characters"],
      summary: "Load character by id",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "number" },
        },
      ],
      responses: {
        200: {
          description: "Character loaded",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/characterSchema",
              },
            },
          },
        },
        ...defaultResponses,
      },
    },

    put: {
      tags: ["Characters"],
      summary: "Update character",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "number" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/characterSchema",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Character updated",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/characterSchema",
              },
            },
          },
        },
        ...defaultResponses,
      },
    },

    delete: {
      tags: ["Characters"],
      summary: "Delete character",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "number" },
        },
      ],
      responses: {
        200: {
          description: "Character deleted",
        },
        ...defaultResponses,
      },
    },
  },
};