import {
  mysqlTable,
  varchar,
  serial,
  float,
  timestamp,
} from "drizzle-orm/mysql-core"

export const recipes = mysqlTable("recipes", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  url: varchar("url", { length: 500 }),
  price: float("price"),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow().defaultNow(),
})
