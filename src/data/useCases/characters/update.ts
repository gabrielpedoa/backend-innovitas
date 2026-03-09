import { ICharacterRepository } from "../../protocols/repository/characters";

export class UpdateCharacterUseCase {
  constructor(private readonly characterRepository: ICharacterRepository) {}
  async execute(data: ICharacter) {
    return await this.characterRepository.update(data);
  }
}
