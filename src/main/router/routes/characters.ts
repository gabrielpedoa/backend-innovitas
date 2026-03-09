import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import verifyAuth from "../../middlewares/verifyAuth";
import {
  CreateCharacterUseCaseControllerFactory,
  LoadCharactersUseCaseControllerFactory,
} from "../../factory/controller/characters";

export default async (router: Router) => {
  router.get("/characters", verifyAuth, expressAdapter(LoadCharactersUseCaseControllerFactory()));
  router.post("/characters", verifyAuth, expressAdapter(CreateCharacterUseCaseControllerFactory()));
};
