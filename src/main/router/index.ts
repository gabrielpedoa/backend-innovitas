import { Express, Router } from "express";
import auth from "./routes/auth";
import users from "./routes/users";
import characters from "./routes/characters";

type IRouter = (router: Router) => void;

const router = Router({
  caseSensitive: false,
});

const routers: IRouter[] = [auth, users, characters];

export default (app: Express) => {
  routers.forEach((fn) => {
    fn(router);
  });

  app.use("/api", router);
};
