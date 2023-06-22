import express, { Router } from "express"
import listRecipes from "./listRecipes"

const edamamRouter: Router = express.Router()

edamamRouter.get("/", listRecipes)

export default edamamRouter
