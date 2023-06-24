import { Request, Response } from "express"
import { db } from "@/db/db"
import { eq } from "drizzle-orm"
import { recipes, Recipe } from "@/db/schema/recipes"

const listRecipes = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body

    const recipeList: Recipe[] = await db
      .select()
      .from(recipes)
      .where(eq(recipes.userId, userId))

    return res
      .status(200)
      .json({ message: "list of recipes", data: recipeList })
  } catch (err) {
    console.error("could not list recipes")
  }
}

export default listRecipes
