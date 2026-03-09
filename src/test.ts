import { UserRepository } from "./infra/repositories/user";

(async () => {
  const users = new UserRepository();
  const load = await users.loadById(1);
  console.log(load);
})();
