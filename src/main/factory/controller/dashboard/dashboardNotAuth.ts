import { DashboardController } from "../../../../presentational/controller/dashboard";
import { DashboardNotAuthUseCaseFactory } from "../../useCases/dashboard/dashboardNotAuth";

export function DashboardNotAuthUseCaseControllerFactory() {
  return new DashboardController(DashboardNotAuthUseCaseFactory());
}
