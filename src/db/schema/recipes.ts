import {
  mysqlTable,
  varchar,
  serial,
  float,
  timestamp,
  int,
} from "drizzle-orm/mysql-core"
import { InferModel, relations } from "drizzle-orm"
import { users } from "./users"

export const recipes = mysqlTable("recipes", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  url: varchar("url", { length: 500 }),
  price: float("price"),
  userId: int("user_id"),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow().defaultNow(),
})

export const pantryRelations = relations(recipes, ({ one }) => ({
  user: one(users, {
    fields: [recipes.userId],
    references: [users.id],
  }),
}))

export type Recipe = InferModel<typeof recipes, "select">
