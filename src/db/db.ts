// db.ts
import { drizzle } from "drizzle-orm/mysql2"

import mysql from "mysql2/promise"
// import { users } from "./schema/users"

// create the connection
const poolConnection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
})

export const db = drizzle(poolConnection)

// const allUsers = await db.select().from(users)
