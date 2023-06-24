import { Request, Response } from "express"
import { db } from "@/db/db"
import { eq } from "drizzle-orm"
import { userIngredients } from "@/db/schema/userIngredients"

const listUserIngredients = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params
    const ingredientsList = await db
      .select()
      .from(userIngredients)
      .where(eq(userIngredients.userId, Number(user_id)))

    return res
      .status(200)
      .json({ message: "ingredients in pantry", data: ingredientsList })
  } catch (err) {
    console.error("Error listing ingredients", err)
  }
}

export default listUserIngredients
