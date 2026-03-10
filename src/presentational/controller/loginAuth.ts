import { IAuthUsecase } from "../../domain/useCases/auth";
import { BadRequest, ExceptionError } from "../helpers/httpResponse";

type IUseCaseResponse = {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export class LoginAuthController<In> {
  constructor(
    private readonly authUsecase: IAuthUsecase<In, IUseCaseResponse>,
    private readonly schemaValidator: ISchemaValidator<In>,
  ) {}

  public async handle(data: In) {
    try {
      const errors = this.schemaValidator.isValid(data);
      if (errors) return BadRequest(errors);

      const response: IUseCaseResponse = await this.authUsecase.execute(data);

      return {
        statusCode: 200,
        body: {
          user: response.user,
        },
        cookies: [
          {
            name: "access_token",
            value: response.token,
            options: {
              httpOnly: true,
              sameSite: "strict",
              maxAge: 1000 * 60 * 60 * 24,
            },
          },
        ],
      };
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
