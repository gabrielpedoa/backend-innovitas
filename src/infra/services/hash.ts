import bcrypt from "bcrypt";

export class HashService {
  public async makeHash(password: string) {
    return bcrypt.hash(password, 10);
  }

  public async compare(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}
