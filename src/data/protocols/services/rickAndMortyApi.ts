interface IRickAndMortyApiService {
  loadPaginatedCharacters(params: LoadPaginatedParams): Promise<IDefaultApiResponse<ICharacter[]>>;
  loadCharacterById(id: string): Promise<IDefaultApiResponse<ICharacter>>;
  loadAllEpisodes(): Promise<IDefaultApiResponse<IEpisodes[]>>;
  loadAllLocations(): Promise<IDefaultApiResponse<ILocation[]>>;
}
