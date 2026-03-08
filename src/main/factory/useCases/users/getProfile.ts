import { GetUserProfileUseCase } from "../../../../data/useCases/users/getProfile";
import { UserRepository } from "../../../../infra/repositories/user";

export function GetUserProfileUseCaseFactory() {
  const userRepository = new UserRepository();
  return new GetUserProfileUseCase(userRepository);
}
