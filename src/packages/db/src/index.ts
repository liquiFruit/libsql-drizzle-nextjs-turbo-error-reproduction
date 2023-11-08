import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { users } from "./schema";

import { join } from "path";
import { sql } from "drizzle-orm";

const libsql = createClient({
  url: "file:" + join(__dirname, "../local.db"),
});

export const db = drizzle(libsql);

export async function getUsers() {
  console.log(
    await db.run(sql`
    SELECT name FROM sqlite_master WHERE type='table';
  `)
  );
  return await db.select().from(users);
}

getUsers().then(console.log);
