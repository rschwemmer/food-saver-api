import {
  mysqlTable,
  serial,
  varchar,
  int,
  timestamp,
} from "drizzle-orm/mysql-core"
import { relations } from "drizzle-orm"
import { users } from "./users"

export const userIngredients = mysqlTable("user_ingredients", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  userId: int("user_id"),
  quantity: int("quantity"),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow(),
})

export const userIngredientsRelations = relations(
  userIngredients,
  ({ one }) => ({
    user: one(users, {
      fields: [userIngredients.userId],
      references: [users.id],
    }),
  })
)
