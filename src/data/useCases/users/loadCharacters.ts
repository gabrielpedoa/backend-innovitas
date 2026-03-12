import { IUserRepository } from "../../protocols/repository/users";

export class LoadCharactersByUserIdUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(userId: string) {
    if (!userId) throw new Error("User id is required");
    const user = await this.userRepository.loadById(Number(userId));
    return user?.characters;
  }
}
