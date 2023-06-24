import express, { Router } from "express"
import listPantry from "./listUserPantry"
import createMOFOPantry from "./createUserIngredients"

const ingredientRouter: Router = express.Router()

// GET
ingredientRouter.get("/:user_id", listPantry)

// PUT

// POST
ingredientRouter.post("/", createMOFOPantry)

// DELETE

export default ingredientRouter
