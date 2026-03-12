import { Request, Response } from "express";

export default <In>(controller: IController<In, unknown>) => {
  return async (req: Request, res: Response) => {
    try {
      const { statusCode, body, cookies } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });

      if (cookies) {
        cookies.forEach((cookie) => {
          res.cookie(cookie.name, cookie.value, cookie.options);
        });
      }

      return res.status(statusCode).json(body);
    } catch (error) {
      return res.status(500).send("Internal server error!");
    }
  };
};
