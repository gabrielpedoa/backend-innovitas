import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import * as env from "dotenv";
import { PrismaClient } from "../../../prisma/generated/prisma/client";
env.config();

const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/dev.db" });

export const prisma = new PrismaClient({ adapter });
