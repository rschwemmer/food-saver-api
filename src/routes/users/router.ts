import express, { Router } from "express"

import create from "./create"

const userRouter: Router = express.Router()

// GET

// PUT

// POST
userRouter.post("/", create)

// DELETE

export default userRouter
