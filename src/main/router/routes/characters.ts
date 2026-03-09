import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import {
  CreateCharacterUseCaseControllerFactory,
  DeleteUseCaseControllerFactory,
  LoadCharacterByIdUseCaseControllerFactory,
  LoadCharactersUseCaseControllerFactory,
  UpdateCharacterUseCaseControllerFactory,
} from "../../factory/controller/characters";
import verifyAuth from "../../middlewares/verifyAuth";

export default async (router: Router) => {
  router.get("/characters", verifyAuth, expressAdapter(LoadCharactersUseCaseControllerFactory()));
  router.post("/characters", verifyAuth, expressAdapter(CreateCharacterUseCaseControllerFactory()));
  router.get("/characters/:id", verifyAuth, expressAdapter(LoadCharacterByIdUseCaseControllerFactory()));
  router.put("/characters/:id", verifyAuth, expressAdapter(UpdateCharacterUseCaseControllerFactory()));
  router.delete("/characters/:id", verifyAuth, expressAdapter(DeleteUseCaseControllerFactory()));
};
