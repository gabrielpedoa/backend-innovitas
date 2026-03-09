import { DeleteController } from "../../../../presentational/controller/delete";
import { DeleteCharacterUseCaseFactory } from "../../useCases/characters/delete";

export function DeleteUseCaseControllerFactory() {
  return new DeleteController(DeleteCharacterUseCaseFactory());
}
