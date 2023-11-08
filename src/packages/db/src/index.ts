import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { users } from "./schema";

import { join } from "path";

const libsql = createClient({
  url: "file:" + join(__dirname, "../local.db"),
});

export const db = drizzle(libsql);

db.select().from(users).then(console.log);

console.log(__dirname);
