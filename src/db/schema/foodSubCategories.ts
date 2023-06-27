import {
  mysqlTable,
  varchar,
  serial,
  timestamp,
  int,
} from "drizzle-orm/mysql-core"
import { relations } from "drizzle-orm"
import { categories } from "./foodCategories"

export const subCategories = mysqlTable("sub_categories", {
  id: serial("id").primaryKey().autoincrement(),
  catId: int("cat_id"),
  name: varchar("name", { length: 256 }),
  created: timestamp("created", { fsp: 2 }).notNull().defaultNow(),
  updated: timestamp("updated").notNull().onUpdateNow().defaultNow(),
})

export const ingredientsRelations = relations(subCategories, ({ one }) => ({
  user: one(categories, {
    fields: [subCategories.catId],
    references: [categories.id],
  }),
}))
