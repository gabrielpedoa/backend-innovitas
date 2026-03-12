import { LoadByIdController } from "../../../../presentational/controller/loadById";
import { LoadCharactersByUserIdUseCaseFactory } from "../../useCases/users/loadCharacters";

export function LoadCharactersByUserIdUseCaseControllerFactory() {
  return new LoadByIdController(LoadCharactersByUserIdUseCaseFactory());
}
