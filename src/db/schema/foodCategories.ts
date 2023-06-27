import {
  mysqlTable,
  varchar,
  serial,
  float,
  timestamp,
  int,
} from "drizzle-orm/mysql-core"

export const categories = mysqlTable("categories", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow().defaultNow(),
})
