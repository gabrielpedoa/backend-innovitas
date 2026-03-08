import { LoadCharactersUseCase } from "../../../../data/useCases/characters/loadCharacter";
import { RickAndMortyApiService } from "../../../../infra/services/rickAndMortyApi";

export function LoadCharactersUseCaseFactory() {
  const apiService = new RickAndMortyApiService();
  return new LoadCharactersUseCase(apiService);
}
