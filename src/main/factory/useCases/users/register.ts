import { RegisterUserUseCase } from "../../../../data/useCases/users/register";
import { UserRepository } from "../../../../infra/repositories/user";
import { HashService } from "../../../../infra/services/hash";

export function RegisterUserUseCaseFactory() {
  const userRepository = new UserRepository();
  const hashService = new HashService();
  return new RegisterUserUseCase(userRepository, hashService);
}
