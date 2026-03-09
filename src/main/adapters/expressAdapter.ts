import { Request, Response } from "express";

type AuthResponse = {
  token?: string;
};

export default <In>(controller: IController<In, unknown>) => {
  return async (req: Request, res: Response) => {
    try {
      const { statusCode, body } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });

      const responseBody = body as AuthResponse;

      if (responseBody?.token) {
        res.cookie("access_token", responseBody.token, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 1000 * 60 * 60 * 24,
        });

        delete responseBody.token;
      }

      return res.status(statusCode).json(body);
    } catch (error) {
      return res.status(500).send("Internal server error!");
    }
  };
};
