import { LoadByIdController } from "../../../../presentational/controller/loadById";
import { DashboardAuthUseCaseFactory } from "../../useCases/dashboard/dashboardAuth";

export function DashboardAuthUseCaseControllerFactory() {
  return new LoadByIdController(DashboardAuthUseCaseFactory());
}
