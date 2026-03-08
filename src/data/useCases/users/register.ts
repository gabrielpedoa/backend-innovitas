import { UserEntity } from "../../../domain/entities/user";
import { IUserRepository } from "../../protocols/repository/users";
import { IHashService } from "../../protocols/services/hash";

export class RegisterUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
  ) {}

  async execute(data: IUser) {
    const { email, password } = data;

    const userExists = await this.userRepository.loadByEmail(email);

    if (userExists) throw new Error("User already exists");

    const hashedPassword = await this.hashService.makeHash(password);

    const userEntity = new UserEntity({
      ...data,
      password: hashedPassword,
    });

    const user = await this.userRepository.create(userEntity.getProps());
    const { password: _, ...rest } = user;

    return rest;
  }
}
