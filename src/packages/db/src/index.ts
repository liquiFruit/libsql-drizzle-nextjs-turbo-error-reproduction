import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { users } from "./schema";

const libsql = createClient({
  url: "file:local.db",
});

export const db = drizzle(libsql);

db.select().from(users).then(console.log);
