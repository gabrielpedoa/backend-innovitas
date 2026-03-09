import { prisma } from "../prisma";

export class CharacterRepository {
  public async create(data: Omit<ICharacter, "id" | "created_at" | "updated_at">): Promise<ICharacter> {
    return await prisma.characters.create({ data });
  }

  public async userHasCharacter(characterId: number, userId: number): Promise<ICharacter | null> {
    return await prisma.characters.findUnique({
      where: {
        user_id_original_character_id: {
          user_id: userId,
          original_character_id: characterId,
        },
      },
    });
  }

  public async update(data: ICharacter): Promise<ICharacter> {
    return await prisma.characters.update({
      where: { id: data.id },
      data,
    });
  }

  public async delete(characterId: number) {
    await prisma.characters.delete({
      where: { id: characterId },
    });

    return true;
  }
}
