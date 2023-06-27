import categoriesData from "./categories"
import foodSubcategories from "./subcategories"
import { categories } from "../db/schema/foodCategories"
import { subCategories } from "../db/schema/foodSubCategories"
import { drizzle } from "drizzle-orm/mysql2"
import mysql from "mysql2/promise"

async function seedDatabase(): Promise<void> {
  try {
    console.log(process.env.DATABASE_URL)
    const poolConnection = mysql.createPool({
      host: String(process.env.DB_HOST),
      user: String(process.env.DB_USER),
      database: String(process.env.DB_NAME),
      password: String(process.env.DB_PASS),
      port: Number(process.env.DB_PORT),
    })

    const db = drizzle(poolConnection)

    await db.insert(categories).values(categoriesData)
    await db.insert(subCategories).values(foodSubcategories)

    console.log("Database seeding completed successfully.")
  } catch (error) {
    console.error("Error occurred during database seeding:", error)
  }
}

// Call the function to initiate the database seeding
seedDatabase()
