import { LoadCharacterByIdUseCase } from "../../../../data/useCases/characters/loadById";
import { RickAndMortyApiService } from "../../../../infra/services/rickAndMortyApi";

export function LoadCharacterByIdUseCaseFactory() {
  const rickMortyApiService = new RickAndMortyApiService();
  return new LoadCharacterByIdUseCase(rickMortyApiService);
}
