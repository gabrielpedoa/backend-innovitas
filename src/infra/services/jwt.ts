import jwt from "jsonwebtoken";
import { env } from "../../main/config/dotenv";

export class JwtService {
  public generateToken(payload: object) {
    return jwt.sign(payload, env.jtwSecret!, {
      expiresIn: "1d",
    });
  }

  verifyToken(token: string) {
    return jwt.verify(token, env.jtwSecret!);
  }
}
