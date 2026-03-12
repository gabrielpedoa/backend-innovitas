import { defaultResponses } from "./responses";

export const authPaths = {
  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Login user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Login successful" },
        ...defaultResponses,
      },
    },
  },

  "/auth/logout": {
    post: {
      tags: ["Auth"],
      summary: "Logout user",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "Logout successful" },
        ...defaultResponses,
      },
    },
  },
};
