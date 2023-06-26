import * as drizzle from "drizzle-orm"
import { db } from "db/db"

import categoriesData from "./categories"
import { categories } from "@/db/schema/foodCategories"

async function seedDatabase(): Promise<void> {
  try {
    await db.insert(categories).values(categoriesData)

    console.log("Database seeding completed successfully.")
  } catch (error) {
    console.error("Error occurred during database seeding:", error)
  }
}

// Call the function to initiate the database seeding
seedDatabase()
