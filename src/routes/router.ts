import express, { Router } from "express"
import edamamRouter from "./edamam/router"

const appRouter: Router = express.Router()

appRouter.use("/", edamamRouter)

export default appRouter
