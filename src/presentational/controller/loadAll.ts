import { ILoadAllUsecase } from "../../domain/useCases/loadAll";
import { ExceptionError, Ok } from "../helpers/httpResponse";

export class LoadAllController<T> implements IController<undefined, unknown> {
  constructor(private readonly loadAllUseCase: ILoadAllUsecase<T>) {}

  public async handle(): Promise<IHttpResponse<unknown>> {
    try {
      const response = await this.loadAllUseCase.execute();
      return Ok(response);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
