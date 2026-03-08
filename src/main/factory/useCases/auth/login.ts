import { LoginUseCase } from "../../../../data/useCases/auth/login";
import { UserRepository } from "../../../../infra/repositories/user";
import { HashService } from "../../../../infra/services/hash";
import { JwtService } from "../../../../infra/services/jwt";

export function LoginUseCaseFactory() {
  const userRepository = new UserRepository();
  const hashService = new HashService();
  const tokenService = new JwtService();
  return new LoginUseCase(userRepository, hashService, tokenService);
}
