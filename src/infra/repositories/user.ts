import { prisma } from "../prisma";

export class UserRepository {
  constructor() {}

  async create(data: Omit<IUser, "id" | "created_at" | "updated_at">): Promise<IUser> {
    const user = await prisma.users.create({
      data,
    });

    return user;
  }

  async loadByEmail(email: string): Promise<IUser | null> {
    return prisma.users.findUnique({
      where: { email },
    });
  }

  async loadById(id: number): Promise<IUser | null> {
    return prisma.users.findUnique({
      where: { id },
    });
  }
}
