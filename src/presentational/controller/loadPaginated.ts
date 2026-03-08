import { ILoadAllPaginatedUsecase } from "../../domain/useCases/loadAllPaginated";
import { ExceptionError, Ok } from "../helpers/httpResponse";

export class LoadAllPaginatedController<T> {
  constructor(private readonly loadAllPaginatedUseCase: ILoadAllPaginatedUsecase<T>) {}

  public async handle(data: LoadPaginatedParams) {
    try {
      const response = await this.loadAllPaginatedUseCase.execute(data);
      return Ok(response);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
