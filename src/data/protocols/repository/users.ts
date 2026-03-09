export interface IUserRepository {
  create(data: Omit<IUser, "id" | "updated_at" | "characters">): Promise<IUser>;
  loadByEmail(email: string): Promise<IUser | null>;
  loadById(id: number): Promise<IUser | null>;
}
