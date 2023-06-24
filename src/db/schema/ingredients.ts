import {
  mysqlTable,
  varchar,
  serial,
  float,
  timestamp,
} from "drizzle-orm/mysql-core"

export const ingredients = mysqlTable("ingredients", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  price: float("price"),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow().defaultNow(),
})
