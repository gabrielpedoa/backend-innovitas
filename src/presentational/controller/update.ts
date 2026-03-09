import { IUpdateUsecase } from "../../domain/useCases/update";
import { BadRequest, ExceptionError, Ok } from "../helpers/httpResponse";

export class UpdateController<T> implements IController<T, unknown> {
  constructor(
    private readonly schemaValidator: ISchemaValidator<T>,
    private readonly updateUsecase: IUpdateUsecase<T>,
  ) {}

  public async handle(data: T): Promise<IHttpResponse<unknown>> {
    try {
      const errors = this.schemaValidator.isValid(data);
      if (errors) return BadRequest(errors);
      const response = await this.updateUsecase.execute(data);
      return Ok(response);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
