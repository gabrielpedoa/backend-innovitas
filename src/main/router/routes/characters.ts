import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import { LoadCharactersUseCaseControllerFactory } from "../../factory/controller/characters/loadCharacters";

export default async (router: Router) => {
  router.get("/characters", expressAdapter(LoadCharactersUseCaseControllerFactory()));
};
