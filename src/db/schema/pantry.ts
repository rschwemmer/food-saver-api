import {
  mysqlTable,
  serial,
  varchar,
  int,
  timestamp,
} from "drizzle-orm/mysql-core"
import { relations, InferModel } from "drizzle-orm"
import { users } from "./users"

export const pantry = mysqlTable("pantry", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull(),
  userId: int("user_id").notNull(),
  quantity: int("quantity"),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow().defaultNow(),
})

export const pantryRelations = relations(pantry, ({ one }) => ({
  user: one(users, {
    fields: [pantry.userId],
    references: [users.id],
  }),
}))

export type NewPantry = InferModel<typeof pantry, "insert">
export type SelectPantry = InferModel<typeof pantry, "select">
