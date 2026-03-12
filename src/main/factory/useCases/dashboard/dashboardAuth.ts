import { DashboardAuthUseCase } from "../../../../data/useCases/dashboard/dashboardAuth";
import { UserRepository } from "../../../../infra/repositories/user";
import { RickAndMortyApiService } from "../../../../infra/services/rickAndMortyApi";

export function DashboardAuthUseCaseFactory() {
  const rickMortyApiService = new RickAndMortyApiService();
  const usersRepository = new UserRepository();
  return new DashboardAuthUseCase(rickMortyApiService, usersRepository);
}
