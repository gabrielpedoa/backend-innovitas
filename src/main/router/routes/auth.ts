import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import { LoginUseCaseControllerFactory } from "../../factory/controller/auth/login";
import { LogoutControllerUseCaseFactory } from "../../factory/controller/auth/logout";
import verifyAuth from "../../middlewares/verifyAuth";

export default async (router: Router) => {
  router.post("/auth/login", expressAdapter(LoginUseCaseControllerFactory()));
  router.post("/auth/logout", verifyAuth, expressAdapter(LogoutControllerUseCaseFactory()));
};
