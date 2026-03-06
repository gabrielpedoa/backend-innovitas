import jwt from "jsonwebtoken";
import loadEnv from "../../main/config/dotenv";

void loadEnv();

export class JwtService {
  public generateToken(payload: object) {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
  }

  verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!);
  }
}
