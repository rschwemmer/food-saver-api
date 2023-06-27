import {
  mysqlTable,
  varchar,
  serial,
  float,
  timestamp,
  int,
} from "drizzle-orm/mysql-core"
import { relations, InferModel } from "drizzle-orm"

import { users } from "./users"

export const ingredients = mysqlTable("ingredients", {
  id: serial("id").primaryKey().autoincrement(),
  userId: int("user_id"),
  name: varchar("name", { length: 256 }),
  price: float("price"),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow().defaultNow(),
})

export const ingredientsRelations = relations(ingredients, ({ one }) => ({
  user: one(users, {
    fields: [ingredients.userId],
    references: [users.id],
  }),
}))

export type NewIngredient = InferModel<typeof ingredients, "insert">
