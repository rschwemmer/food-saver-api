import express, { Router } from "express"
import edamamRouter from "./edamam/router"
import ingredientRouter from "./ingredients/router"
import userRouter from "./users/router"

const appRouter: Router = express.Router()

appRouter.use("/edamam", edamamRouter)
appRouter.use("/ingredients", ingredientRouter)
appRouter.use("/users", userRouter)

export default appRouter
