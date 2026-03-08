import { AuthController } from "../../../../presentational/controller/auth";
import { SchemaValidator } from "../../../../presentational/helpers/schema-validator";
import { AuthSchema } from "../../../../presentational/validation/auth";
import { LoginUseCaseFactory } from "../../useCases/auth/login";

export function LoginUseCaseControllerFactory() {
  const loginSchema = new SchemaValidator(AuthSchema);
  return new AuthController(LoginUseCaseFactory(), loginSchema);
}
