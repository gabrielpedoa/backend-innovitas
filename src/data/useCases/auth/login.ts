import { IUserRepository } from "../../protocols/repository/users";
import { IHashService } from "../../protocols/services/hash";
import { IJwtService } from "../../protocols/services/jwt";

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
    private tokenService: IJwtService,
  ) {}

  async execute({ email, password }: LoginRequest) {
    const user = await this.userRepository.loadByEmail(email);

    if (!user) throw new Error("Invalid credentials");

    const passwordMatch = await this.hashService.compare(password, user.password);

    if (!passwordMatch) throw new Error("Invalid credentials");

    const token = await this.tokenService.generateToken(user);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
