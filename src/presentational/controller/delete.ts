import { IDeleteUsecase } from "../../domain/useCases/delete";
import { BadRequest, ExceptionError, Ok } from "../helpers/httpResponse";

export class DeleteController implements IController<{ id: string }, unknown> {
  constructor(private readonly deleteUsecase: IDeleteUsecase) {}

  public async handle(param: { id: string }): Promise<IHttpResponse<unknown>> {
    try {
      if (!param.id) return BadRequest("O id é necessario!");
      const response = await this.deleteUsecase.execute(param.id);
      return Ok(response);
    } catch (err) {
      return ExceptionError(err);
    }
  }
}
