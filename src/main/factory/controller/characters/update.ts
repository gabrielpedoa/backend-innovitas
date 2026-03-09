import { UpdateController } from "../../../../presentational/controller/update";
import { SchemaValidator } from "../../../../presentational/helpers/schema-validator";
import { UpdateCharacterSchema } from "../../../../presentational/validation/character";
import { UpdateCharacterUseCaseFactory } from "../../useCases/characters/update";

export function UpdateCharacterUseCaseControllerFactory() {
  const schema = new SchemaValidator(UpdateCharacterSchema);
  return new UpdateController(schema, UpdateCharacterUseCaseFactory());
}
