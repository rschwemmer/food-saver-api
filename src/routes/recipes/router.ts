import express, { Router } from "express"
import listAvailableRecipes from "./listAvailableRecipes"

const recipeRouter: Router = express.Router()

// GET
recipeRouter.get("/available", listAvailableRecipes)
// PUT

// POST

// DELETE

export default recipeRouter
