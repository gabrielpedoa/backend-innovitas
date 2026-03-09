export class LoadCharacterByIdUseCase {
  constructor(private readonly rickMortyApiService: IRickAndMortyApiService) {}
  async execute(data: { id: string }) {
    return await this.rickMortyApiService.loadCharacterById(data.id);
  }
}
