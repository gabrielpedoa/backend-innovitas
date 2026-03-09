import { CreateController } from "../../../../presentational/controller/create";
import { SchemaValidator } from "../../../../presentational/helpers/schema-validator";
import { CharacterSchema } from "../../../../presentational/validation/character";
import { CreateCharacterUseCaseFactory } from "../../useCases/characters/create";

export function CreateCharacterUseCaseControllerFactory() {
  const schema = new SchemaValidator(CharacterSchema);
  return new CreateController(CreateCharacterUseCaseFactory(), schema);
}
