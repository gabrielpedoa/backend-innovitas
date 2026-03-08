interface IRickAndMortyApiService {
  loadPaginatedCharacters(params: LoadPaginatedParams): Promise<ICharacter[]>;
}
