export interface ICharacterRepository {
  create(data: Omit<ICharacter, "id" | "created_at" | "updated_at">): Promise<ICharacter>;
  userHasCharacter(characterId: number, userId: number): Promise<ICharacter | null>;
  update(data: ICharacter): Promise<ICharacter>;
  delete(characterId: number): Promise<boolean>;
}
