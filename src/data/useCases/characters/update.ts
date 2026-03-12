import { CharacterEntity } from "../../../domain/entities/character";
import { ICharacterRepository } from "../../protocols/repository/characters";

export class UpdateCharacterUseCase {
  constructor(private readonly characterRepository: ICharacterRepository) {}
  async execute(data: ICharacter) {
    const characterEntity = new CharacterEntity(data);
    const updateData = characterEntity.getCharacterDomainEntity();
    return await this.characterRepository.update({ ...updateData, id: Number(updateData.id) });
  }
}
