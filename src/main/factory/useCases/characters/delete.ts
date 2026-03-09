import { DeleteCharacterUseCase } from "../../../../data/useCases/characters/delete";
import { CharacterRepository } from "../../../../infra/repositories/character";

export function DeleteCharacterUseCaseFactory() {
  const characterRepository = new CharacterRepository();
  return new DeleteCharacterUseCase(characterRepository);
}
