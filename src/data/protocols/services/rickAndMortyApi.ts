interface IRickAndMortyApiService {
  loadPaginatedCharacters(params: LoadPaginatedParams): Promise<ICharacter[]>;
  loadCharacterById(id: string): Promise<ICharacter>;
}
