import express, { Router } from "express"
import { processRequest } from "zod-express-middleware"

import { createUserSchema } from "./schemas"
import create from "./create"

const userRouter: Router = express.Router()

// GET

// PUT

// POST
userRouter.post("/", processRequest(createUserSchema), create)

// DELETE

export default userRouter
