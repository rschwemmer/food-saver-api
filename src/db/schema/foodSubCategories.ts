import {
  mysqlTable,
  varchar,
  serial,
  timestamp,
  int,
} from "drizzle-orm/mysql-core"

export const subCategories = mysqlTable("sub_categories", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow().defaultNow(),
})
