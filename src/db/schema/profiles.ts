import { mysqlTable, varchar, serial, int } from "drizzle-orm/mysql-core"
import { users } from "./users"
import { relations } from "drizzle-orm"

export const profiles = mysqlTable("profiles", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  userId: int("user_id"),
})

export const profilesRelations = relations(profiles, ({ one }) => ({
  user: one(users, { fields: [profiles.userId], references: [users.id] }),
}))
