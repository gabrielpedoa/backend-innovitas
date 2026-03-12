import { LoadCharactersByUserIdUseCase } from "../../../../data/useCases/users/loadCharacters";
import { UserRepository } from "../../../../infra/repositories/user";

export function LoadCharactersByUserIdUseCaseFactory() {
  const userRepository = new UserRepository();
  return new LoadCharactersByUserIdUseCase(userRepository);
}
