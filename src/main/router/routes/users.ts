import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import { LoadCharactersByUserIdUseCaseControllerFactory } from "../../factory/controller/users/loadCharacters";
import { RegisterUserUseCaseControllerFactory } from "../../factory/controller/users/register";
import verifyAuth from "../../middlewares/verifyAuth";

export default async (router: Router) => {
  router.post("/users", expressAdapter(RegisterUserUseCaseControllerFactory()));
  router.get("/users/:id", verifyAuth, expressAdapter(LoadCharactersByUserIdUseCaseControllerFactory()));
};
