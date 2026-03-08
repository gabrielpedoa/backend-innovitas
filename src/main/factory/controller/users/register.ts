import { CreateController } from "../../../../presentational/controller/create";
import { SchemaValidator } from "../../../../presentational/helpers/schema-validator";
import { UserSchema } from "../../../../presentational/validation/user";
import { RegisterUserUseCaseFactory } from "../../useCases/users/register";

export function RegisterUserUseCaseControllerFactory() {
  const userSchema = new SchemaValidator(UserSchema);
  return new CreateController(RegisterUserUseCaseFactory(), userSchema);
}
