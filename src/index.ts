import express, { Request, Response } from "express"
const app = express()

// setupMiddleware(app)

// Routes
app.get("/", (_req: Request, res: Response) => res.end(process.env.NODE_ENV))

app.listen(process.env.PORT, () => {
  console.info(`Server running on port http://localhost:${process.env.PORT}.`)
})

