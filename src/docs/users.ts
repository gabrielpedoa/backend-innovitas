import { defaultResponses } from "./responses";

export const userPaths = {
  "/users": {
    post: {
      tags: ["Users"],
      summary: "Register user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "email", "password"],
              properties: {
                name: {
                  type: "string",
                  example: "Gabriel",
                },
                email: {
                  type: "string",
                  example: "gabriel@email.com",
                },
                password: {
                  type: "string",
                  example: "123456",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User created",
        },
        ...defaultResponses,
      },
    },
  },

  "/users/{id}": {
    get: {
      tags: ["Users"],
      summary: "Load user characters",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "number",
            example: 1,
          },
        },
      ],
      responses: {
        200: {
          description: "User characters loaded",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/characterSchema",
                },
              },
            },
          },
        },
        ...defaultResponses,
      },
    },
  },
};