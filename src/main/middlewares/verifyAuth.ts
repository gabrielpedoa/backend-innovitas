import { NextFunction, Request, Response } from "express";
import { JwtService } from "../../infra/services/jwt";
import { Unauthorized } from "../../presentational/helpers/httpResponse";

const jwtService = new JwtService();

export default async (req: Request, res: Response, next: NextFunction) => {
  const statusCode = Unauthorized().statusCode;

  try {
    const authorization = req.headers.authorization;
    const cookieToken = req.cookies?.access_token;

    let token: string | undefined;

    if (authorization) token = authorization.split(" ")[1];

    if (!token && cookieToken) token = cookieToken;

    if (!token) return res.status(statusCode).send("User Unauthorized Access!");

    await jwtService.verifyToken(token);

    return next();
  } catch {
    return res.status(statusCode).send("User Unauthorized Access!");
  }
};
