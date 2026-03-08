import { IUserRepository } from "../../protocols/repository/users";

export class GetUserProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: number) {
    const user = await this.userRepository.loadById(userId);

    if (!user) throw new Error("User not found");

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
    };
  }
}
