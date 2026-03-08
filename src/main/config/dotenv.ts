import * as dotenv from "dotenv";
dotenv.config();

export const env = {
  databaseUrl: process.env.DATABASE_URL,
  jtwSecret: process.env.JWT_SECRET,
  serverPort: process.env.PORT,
  rickAndMortyUrl: process.env.RICKMORTYAPI_URL,
};
