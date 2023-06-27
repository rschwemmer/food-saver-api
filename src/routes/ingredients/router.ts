import express, { Router } from "express"
import listPantry from "./listUserPantry"
import createMOFOPantry from "./createUserIngredients"
import talkToTheBot from "./utils/talkToTheBot"

const ingredientRouter: Router = express.Router()

// GET
ingredientRouter.get("/:user_id", listPantry)

// PUT

// POST
ingredientRouter.post("/", createMOFOPantry)
ingredientRouter.post("/ingredient/:user_id", talkToTheBot)

// DELETE

export default ingredientRouter
