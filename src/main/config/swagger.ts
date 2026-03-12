import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { authPaths } from "../../docs/auth";
import { characterPaths } from "../../docs/characters";
import { dashboardPaths } from "../../docs/dashboard";
import { characterSchema } from "../../docs/schemas/character";
import { dashboardSchema } from "../../docs/schemas/dashboard";
import { paginatedCharactersSchema } from "../../docs/schemas/pagination";
import { userSchema } from "../../docs/schemas/user";
import { userPaths } from "../../docs/users";
import { env } from "./dotenv";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Innovitas API",
      version: "1.0.0",
      description: "API documentation for Backend Innovitas project",
    },
    components: {
      schemas: {
        characterSchema,
        paginatedCharactersSchema,
        userSchema,
        dashboardSchema,
      },
    },
    paths: {
      ...authPaths,
      ...userPaths,
      ...dashboardPaths,
      ...characterPaths,
    },
    servers: [
      {
        url: `http://localhost:${env.serverPort}/api`,
      },
    ],
  },
  apis: ["./src/**/*.ts"],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
