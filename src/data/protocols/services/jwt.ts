import jwt from "jsonwebtoken";

export interface IJwtService {
  generateToken(payload: object): string;
  verifyToken(token: string): string | jwt.JwtPayload;
}
