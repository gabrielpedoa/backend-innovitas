import { rickAndMortyApi } from "../../main/config/rickMortyApi";

export class RickAndMortyApiService {
  public async loadPaginatedCharacters(params: LoadPaginatedParams) {
    try {
      const response = await rickAndMortyApi.get<ICharacter[]>("/character", {
        params,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load characters");
    }
  }

  public async loadCharacterById(id: string) {
    try {
      const response = await rickAndMortyApi.get<ICharacter>(`/character/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load characters");
    }
  }
  public async loadAllEpisodes() {
    try {
      const response = await rickAndMortyApi.get<IEpisodes[]>("/episode");
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error;
    }
  }
  public async loadAllLocations() {
    try {
      const response = await rickAndMortyApi.get<ILocation[]>("/location");
      return response.data;
    } catch (error) {
      console.log(error);
      throw Error;
    }
  }
}
