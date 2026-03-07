import cors from "cors";
import express from "express";
import dataBase from "./config/dataBase";
import { env } from "./config/dotenv";
import { setupSwagger } from "./config/swagger";

class Server {
  private app = express();

  private middlewares() {
    this.app.use(cors({ origin: "*", credentials: true }));
    this.app.use(express.json());
  }

  private start() {
    const callback = () => console.log("Server running at:", env.serverPort);
    this.app.listen(env.serverPort, callback);
  }

  public bootstrap() {
    this.middlewares();
    setupSwagger(this.app);
    // routes(this.app);
    dataBase();
    this.start();
  }
}

void new Server().bootstrap();
