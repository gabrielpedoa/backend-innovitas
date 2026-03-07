import prisma from "../prisma";

interface IUserRepository {}

export class UserRepository {
  constructor() {}
  public async create() {
    const response = await prisma.users.findMany();
    console.log(response);
  }
}

const aa = new UserRepository().create();
console.log(aa);
