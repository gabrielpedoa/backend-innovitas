import { ICharacterRepository } from "../../protocols/repository/characters";

export class DeleteCharacterUseCase {
  constructor(private readonly characterRepository: ICharacterRepository) {}
  async execute(id: string) {
    return await this.characterRepository.delete(Number(id));
  }
}
