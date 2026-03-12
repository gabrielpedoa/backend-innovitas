import { IDashboardUsecase } from "../../domain/useCases/dashboard";
import { ExceptionError, Ok } from "../helpers/httpResponse";

export class DashboardController<T> implements IController<undefined, unknown> {
  constructor(private readonly dashboardUseCase: IDashboardUsecase<T>) {}

  public async handle(): Promise<IHttpResponse<unknown>> {
    try {
      const response = await this.dashboardUseCase.execute();
      return Ok(response);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
