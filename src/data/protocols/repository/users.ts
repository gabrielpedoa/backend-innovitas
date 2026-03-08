export interface IUserRepository {
  create(data: Omit<IUser, "id" | "created_at" | "updated_at">): Promise<IUser>;
  loadByEmail(email: string): Promise<IUser | null>;
  loadById(id: number): Promise<IUser | null>;
}
