import { LoadByIdController } from "../../../../presentational/controller/loadById";
import { GetUserProfileUseCaseFactory } from "../../useCases/users/getProfile";

export function GetUserProfileUseCaseControllerFactory() {
  return new LoadByIdController(GetUserProfileUseCaseFactory());
}
