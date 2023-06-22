import { mysqlTable, serial, varchar, timestamp } from "drizzle-orm/mysql-core"

export const users = mysqlTable("users", {
  id: serial("id").primaryKey().autoincrement(),
  firstName: varchar("first_name", { length: 50 }),
  lastName: varchar("last_name", { length: 50 }),
  phone: varchar("phone", { length: 256 }),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow(),
})
