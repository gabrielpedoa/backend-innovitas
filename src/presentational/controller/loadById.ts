import { ILoadByIdUsecase } from "../../domain/useCases/loadById";
import { BadRequest, ExceptionError, NotFound, Ok } from "../helpers/httpResponse";

export class LoadByIdController<T> implements IController<{ id: string }, unknown> {
  constructor(private readonly loadByIdUsecase: ILoadByIdUsecase<T>) {}

  public async handle(data: { id: string }): Promise<IHttpResponse<unknown>> {
    try {
      if (!data.id) return BadRequest("O id é necessario");
      const response = await this.loadByIdUsecase.execute(data.id);
      if (!response) return NotFound();
      return Ok(response);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
