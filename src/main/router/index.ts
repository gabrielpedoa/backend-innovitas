import { Express, Router } from "express";
import auth from "./routes/auth";
import users from "./routes/users";

type IRouter = (router: Router) => void;

const router = Router({
  caseSensitive: false,
});

const routers: IRouter[] = [auth, users];

export default (app: Express) => {
  routers.forEach((fn) => {
    fn(router);
  });

  app.use("/api", router);
};
