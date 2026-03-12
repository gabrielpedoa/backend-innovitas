export class DashboardNotAuthUseCase {
  constructor(private readonly rickMortyApiService: IRickAndMortyApiService) {}
  async execute() {
    const characters = await this.rickMortyApiService.loadPaginatedCharacters({ page: 0 });
    const episodes = await this.rickMortyApiService.loadAllEpisodes();
    const locations = await this.rickMortyApiService.loadAllLocations();

    return {
      totalCharacters: characters.info.count,
      totalEpisodes: episodes.info.count,
      totalLocations: locations.info.count,
      userTotalCharacters: null,
      myFavoritesCharacters: null,
    };
  }
}
