export const userPaths = {
  "/users/me": {
    get: {
      tags: ["Users"],
      summary: "Get logged user",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "User profile",
        },
      },
    },
  },
  "/users/register": {
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
                name: { type: "string" },
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User created",
        },
      },
    },
  },
};
