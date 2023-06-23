import { mysqlTable, varchar, serial } from "drizzle-orm/mysql-core"
import { users } from "./users"
import { relations } from "drizzle-orm"

export const profiles = mysqlTable("profiles", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
})

export const profilesRelations = relations(profiles, ({ one }) => ({
  user: one(users, { fields: [profiles.id], references: [users.id] }),
}))
