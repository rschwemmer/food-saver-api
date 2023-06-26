import express, { Router } from "express"
import edamamRouter from "./edamam/router"
import ingredientRouter from "./ingredients/router"
import userRouter from "./users/router"
import recipeRouter from "./recipes/router"

const appRouter: Router = express.Router()

appRouter.use("/edamam", edamamRouter)
appRouter.use("/ingredients", ingredientRouter)
appRouter.use("/users", userRouter)
appRouter.use("/recipes", recipeRouter)

export default appRouter
