import { NextFunction, Request, Response } from "express";
import { JwtService } from "../../infra/services/jwt";
import { Unauthorized } from "../../presentational/helpers/httpResponse";

const jwtService = new JwtService();

export default async (req: Request, res: Response, next: NextFunction) => {
  const statusCode = Unauthorized().statusCode;
  try {
    const authorization = req.headers?.authorization;
    if (!authorization) return res.status(statusCode).send("User Unauthorized Access!");
    const token = authorization.split(" ")[1];
    if (!token) return res.status(statusCode).send("User Unauthorized Access!");
    await jwtService.verifyToken(token);
    next();
  } catch (error) {
    return res.status(statusCode).send("User Unauthorized Access!");
  }
};
