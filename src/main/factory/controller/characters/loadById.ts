import { LoadByIdController } from "../../../../presentational/controller/loadById";
import { LoadCharacterByIdUseCaseFactory } from "../../useCases/characters/loadById";

export function LoadCharacterByIdUseCaseControllerFactory() {
  return new LoadByIdController(LoadCharacterByIdUseCaseFactory());
}
