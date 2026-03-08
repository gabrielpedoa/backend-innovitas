import { LoadAllPaginatedController } from "../../../../presentational/controller/loadPaginated";
import { LoadCharactersUseCaseFactory } from "../../useCases/characters/loadCharacters";

export function LoadCharactersUseCaseControllerFactory() {
  return new LoadAllPaginatedController(LoadCharactersUseCaseFactory());
}
