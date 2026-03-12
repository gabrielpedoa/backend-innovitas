import { DashboardNotAuthUseCase } from "../../../../data/useCases/dashboard/dashboardNotAuth";
import { RickAndMortyApiService } from "../../../../infra/services/rickAndMortyApi";

export function DashboardNotAuthUseCaseFactory() {
  const rickMortyApiService = new RickAndMortyApiService();
  return new DashboardNotAuthUseCase(rickMortyApiService);
}
