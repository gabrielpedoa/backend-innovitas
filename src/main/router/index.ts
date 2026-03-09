import { Express, Router } from "express";
import auth from "./routes/auth";
import users from "./routes/users";
import characters from "./routes/characters";
import dashboard from "./routes/dashboard";

type IRouter = (router: Router) => void;

const router = Router({
  caseSensitive: false,
});

const routers: IRouter[] = [auth, users, characters, dashboard];

export default (app: Express) => {
  routers.forEach((fn) => {
    fn(router);
  });

  app.use("/api", router);
};
