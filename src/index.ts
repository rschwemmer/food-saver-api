import "dotenv/config"

import cookies from "cookie-parser"
import cors from "cors"
import express from "express"

import appRouter from "./routes/router"
import { createClerkClient } from "@clerk/clerk-sdk-node"

const app = express()

app.use(express.json())
app.use(cookies())
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
)
const clerk = createClerkClient({ apiKey: process.env.CLERK_API_KEY })
app.use(clerk.expressWithAuth({}))

app.get("/", (req, res) => {
  res.status(200).json({ message: "API base url" })
})

app.use("/app", appRouter)

app.listen(process.env.PORT, () =>
  console.info(`Server running on port http://localhost:${process.env.PORT}.`)
)
