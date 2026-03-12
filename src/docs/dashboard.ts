import { defaultResponses } from "./responses";

export const dashboardPaths = {
  "/dashboard": {
    get: {
      tags: ["Dashboard"],
      summary: "Dashboard public data",
      responses: {
        200: {
          description: "Dashboard data loaded",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/dashboardSchema",
              },
            },
          },
        },
        ...defaultResponses,
      },
    },
  },

  "/dashboard/{id}": {
    get: {
      tags: ["Dashboard"],
      summary: "Dashboard user data",
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
          description: "Dashboard data loaded",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/dashboardSchema",
              },
            },
          },
        },
        ...defaultResponses,
      },
    },
  },
};
