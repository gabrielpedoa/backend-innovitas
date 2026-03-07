import { ICreateUsecase } from "../../domain/useCases/create";
import { BadRequest, Created, ExceptionError } from "../helpers/httpResponse";
import { ISchemaValidator } from "../helpers/schema-validator";

export class CreateController<In, Out> implements IController<In, unknown> {
  constructor(
    private readonly createUsecase: ICreateUsecase<In, Out>,
    private readonly schemaValidator: ISchemaValidator<In>,
  ) {}

  public async handle(data: In) {
    try {
      const errors = this.schemaValidator.isValid(data);
      if (errors) return BadRequest(errors);
      const response = await this.createUsecase.execute(data);
      return Created(response);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
