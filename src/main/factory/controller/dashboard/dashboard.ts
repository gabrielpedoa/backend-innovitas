import { LoadByIdController } from "../../../../presentational/controller/loadById";
import { DashboardUseCaseFactory } from "../../useCases/dashboard/dashboard";

export function DashboardUseCaseControllerFactory() {
  return new LoadByIdController(DashboardUseCaseFactory());
}
