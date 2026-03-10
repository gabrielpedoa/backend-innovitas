import { LogoutController } from "../../../../presentational/controller/logoutAuth";

export function LogoutControllerUseCaseFactory() {
  return new LogoutController();
}