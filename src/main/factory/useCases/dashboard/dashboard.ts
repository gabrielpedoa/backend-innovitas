import { DashboardUseCase } from "../../../../data/useCases/dashboard/dashboard";
import { UserRepository } from "../../../../infra/repositories/user";
import { RickAndMortyApiService } from "../../../../infra/services/rickAndMortyApi";

export function DashboardUseCaseFactory() {
  const rickMortyApiService = new RickAndMortyApiService();
  const usersRepository = new UserRepository();
  return new DashboardUseCase(rickMortyApiService, usersRepository);
}
