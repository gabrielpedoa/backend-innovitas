import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { authPaths } from "../../docs/auth";
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
    paths: {
      ...authPaths,
      ...userPaths,
    },
    servers: [
      {
        url: `http://localhost:${env.serverPort}`,
      },
    ],
  },
  apis: ["./src/**/*.ts"],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
