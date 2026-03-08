import axios from "axios";
import { env } from "../../main/config/dotenv";

export const rickAndMortyApi = axios.create({
  baseURL: env.rickAndMortyUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
