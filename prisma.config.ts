import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma",
  migrations: {
    path: "prisma/migrations",
    initShadowDb: `
      SET SESSION sql_mode = REPLACE(@@sql_mode, 'NO_ZERO_DATE', '');
      SET SESSION sql_mode = REPLACE(@@sql_mode, 'NO_ZERO_IN_DATE', '');
    `,
  },
  experimental: {
    externalTables: true,
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
