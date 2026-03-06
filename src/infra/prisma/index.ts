import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../../prisma/generated/prisma/client";
import loadEnv from "../../main/config/dotenv";

void loadEnv();

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({
  adapter,
});
