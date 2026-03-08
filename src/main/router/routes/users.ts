import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import { GetUserProfileUseCaseControllerFactory } from "../../factory/controller/users/getProfile";
import { RegisterUserUseCaseControllerFactory } from "../../factory/controller/users/register";
import verifyAuth from "../../middlewares/verifyAuth";

export default async (router: Router) => {
  router.post("/users/register", expressAdapter(RegisterUserUseCaseControllerFactory()));
  router.get("/users/me", verifyAuth, expressAdapter(GetUserProfileUseCaseControllerFactory()));
};
