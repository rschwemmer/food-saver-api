import express, { Router } from "express"
import edamamRouter from "./edamam/router"

const appRouter: Router = express.Router()

appRouter.use("/edamam", edamamRouter)

export default appRouter
