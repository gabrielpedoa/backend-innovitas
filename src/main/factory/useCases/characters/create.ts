import { CreateCharacterUseCase } from "../../../../data/useCases/characters/create";
import { CharacterRepository } from "../../../../infra/repositories/character";

export function CreateCharacterUseCaseFactory() {
  const characterRepository = new CharacterRepository();
  return new CreateCharacterUseCase(characterRepository);
}
