import express, { Router } from "express"
import listUserIngredients from "./listUserIngredients"

const ingredientRouter: Router = express.Router()

// GET
ingredientRouter.get("/:user_id", listUserIngredients)

// PUT

// POST
ingredientRouter.post("/")

// DELETE

export default ingredientRouter
