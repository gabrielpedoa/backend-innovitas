export class LoadCharactersUseCase {
  constructor(private rickMortyService: IRickAndMortyApiService) {}

  async execute({ page, name }: LoadPaginatedParams) {
    const characters = await this.rickMortyService.loadPaginatedCharacters({
      page,
      name,
    });

    return characters;
  }
}
