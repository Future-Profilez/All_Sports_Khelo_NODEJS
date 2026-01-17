import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/introspected.tmp.prisma", // temporary file
  datasource: {
    url: env("DATABASE_URL"),
  },
});