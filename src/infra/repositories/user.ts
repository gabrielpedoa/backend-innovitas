import { prisma } from "../prisma";

export class UserRepository {
  constructor() {}

  async create(data: Omit<IUser, "id" | "updated_at" | "characters">): Promise<IUser> {
    const user = await prisma.users.create({
      data,
      include: { characters: true },
    });

    return user;
  }

  async loadByEmail(email: string): Promise<IUser | null> {
    return prisma.users.findUnique({
      where: { email },
      include: { characters: true },
    });
  }

  async loadById(id: number): Promise<IUser | null> {
    return prisma.users.findUnique({
      where: { id },
      include: { characters: true },
    });
  }
}
