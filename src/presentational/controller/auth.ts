import { IAuthUsecase } from "../../domain/useCases/auth";
import { BadRequest, ExceptionError, Ok } from "../helpers/httpResponse";

export class AuthController<In, Out> {
  constructor(
    private readonly authUsecase: IAuthUsecase<In, Out>,
    private readonly schemaValidator: ISchemaValidator<In>,
  ) {}

  public async handle(data: In) {
    try {
      const errors = this.schemaValidator.isValid(data);
      if (errors) return BadRequest(errors);
      const response = await this.authUsecase.execute(data);
      return Ok(response);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
