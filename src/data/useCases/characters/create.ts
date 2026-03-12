import { CharacterEntity } from "../../../domain/entities/character";
import { CharacterMapper } from "../../mappers/character";
import { ICharacterRepository } from "../../protocols/repository/characters";

type IData = ICharacterApiResponse & {
  user_id: number;
};

export class CreateCharacterUseCase {
  constructor(private readonly characterRepository: ICharacterRepository) {}

  async execute(data: IData) {
    const character = CharacterMapper.fromApiToDomain(data, data.user_id);
    const characterEntity = new CharacterEntity(character);

    const { original_character_id, user_id } = characterEntity.getCharacterDomainEntity();

    const existing = await this.characterRepository.userHasCharacter(original_character_id, user_id);

    if (existing) throw new Error("Character already exists for this user.");

    return await this.characterRepository.create(characterEntity.getCharacterDomainEntity());
  }
}
