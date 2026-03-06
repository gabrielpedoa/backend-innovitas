import cors from "cors";
import express from "express";
import dataBase from "./config/dataBase";
import loadEnv from "./config/dotenv";

void loadEnv();

const PORT = process.env.PORT;

class Server {
  private app = express();

  private middlewares() {
    this.app.use(cors({ origin: "*", credentials: true }));
  }

  private start() {
    const callback = () => console.log("Server running at:", PORT);
    this.app.listen(PORT, callback);
  }

  public bootstrap() {
    this.middlewares();
    // routes(this.app);
    dataBase();
    this.start();
  }
}

void new Server().bootstrap();
