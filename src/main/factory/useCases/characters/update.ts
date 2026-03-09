import { UpdateCharacterUseCase } from "../../../../data/useCases/characters/update";
import { CharacterRepository } from "../../../../infra/repositories/character";

export function UpdateCharacterUseCaseFactory() {
  const characterRepository = new CharacterRepository();
  return new UpdateCharacterUseCase(characterRepository);
}
