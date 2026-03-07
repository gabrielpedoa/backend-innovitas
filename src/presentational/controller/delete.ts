import { IDeleteUsecase } from "../../domain/useCases/delete";
import { BadRequest, ExceptionError, Ok } from "../helpers/httpResponse";

export class DeleteController implements IController<{ id: string }, unknown> {
  constructor(private readonly deleteUsecase: IDeleteUsecase) {}

  public async handle(data: { id: string }): Promise<IHttpResponse<unknown>> {
    try {
      if (!data.id) return BadRequest("O id é necessario!");
      const response = await this.deleteUsecase.execute(data.id);
      return Ok(response);
    } catch (err) {
      return ExceptionError(err);
    }
  }
}
