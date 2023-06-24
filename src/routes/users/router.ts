import express, { Router } from "express"
import { processRequest } from "zod-express-middleware"
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node"

import { createUserSchema } from "./schemas"
import create from "./create"
import getMe from "./me"

const userRouter: Router = express.Router()

// GET
userRouter.get("/me", ClerkExpressWithAuth(), getMe)

// PUT

// POST
userRouter.post("/", processRequest(createUserSchema), create)

// DELETE

export default userRouter
