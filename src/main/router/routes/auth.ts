import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import { LoginUseCaseControllerFactory } from "../../factory/controller/auth/login";

export default async (router: Router) => {
  router.post("/auth/login", expressAdapter(LoginUseCaseControllerFactory()));
};
