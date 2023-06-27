import express, { Router } from "express"
import listPantry from "./listUserPantry"
import createMOFOPantry from "./createUserIngredients"
import talkToTheBot from "./utils/talkToTheBot"
import readImage from "./readImage"

const ingredientRouter: Router = express.Router()

// GET
ingredientRouter.get("/list/:user_id", listPantry)
ingredientRouter.get("/image", readImage)

// PUT

// POST
ingredientRouter.post("/", createMOFOPantry)
ingredientRouter.post("/ingredient/:user_id", talkToTheBot)

// DELETE

export default ingredientRouter
