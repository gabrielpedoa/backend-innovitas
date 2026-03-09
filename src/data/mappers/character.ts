export class CharacterMapper {
  static fromApiToDomain(apiCharacter: ICharacterApiResponse, userId: number): ICharacter {
    return {
      original_character_id: apiCharacter.id,
      name: apiCharacter.name,
      species: apiCharacter.species,
      gender: apiCharacter.gender,
      origin: apiCharacter.origin.name,
      location: apiCharacter.location.name,
      image: apiCharacter.image,
      status: apiCharacter.status,
      user_id: userId,
      created_at: apiCharacter.created,
    };
  }
}
