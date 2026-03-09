import { IUserRepository } from "../../protocols/repository/users";

export class DashboardUseCase {
  constructor(
    private readonly rickMortyApiService: IRickAndMortyApiService,
    private readonly usersRepository: IUserRepository,
  ) {}
  async execute(id: string) {
    console.log(id)
    const characters = await this.rickMortyApiService.loadPaginatedCharacters({ page: 0 });
    const episodes = await this.rickMortyApiService.loadAllEpisodes();
    const locations = await this.rickMortyApiService.loadAllLocations();
    const user = await this.usersRepository.loadById(Number(id));
    const myFavoritesCharacters =
      user?.characters.sort((a, b) => b.created_at.getTime() - a.created_at.getTime()).slice(0, 3) ?? null;

    return {
      totalCharacters: characters.info.count,
      totalEpisodes: episodes.info.count,
      totalLocations: locations.info.count,
      userTotalCharacters: user?.characters.length,
      myFavoritesCharacters,
    };
  }
}
