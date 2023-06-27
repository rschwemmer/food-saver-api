import { Request, Response } from "express"
import { openai } from "@/index"
import { db } from "@/db/db"
import { categories } from "@/db/schema/foodCategories"
import { subCategories } from "@/db/schema/foodSubCategories"
import { ingredients, NewIngredient } from "@/db/schema/ingredients"

const talkToTheBot = async (req: Request, res: Response) => {
  try {
    const input = "Green Bell Pepper"

    const categoryList = await db.select().from(categories)
    const subCategoryList = await db.select().from(subCategories)

    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content: `Categorize the following food item: ${input} using the category list: ${categoryList.toString()} and sub category list: ${subCategoryList.toString()} format it into a json response with the keys name, categoryId, categoryName, subcategoryId, subcategoryName.`,
        },
      ],
    })

    const categorizedIngredient = JSON.parse(
      String(chatCompletion.data.choices[0].message?.content)
    )

    const itemToInsert: NewIngredient = {
      name: categorizedIngredient.name,
      userId: Number(req.params.user_id),
    }
    const newItem = await db.insert(ingredients).values(itemToInsert)
    return res.status(200).json({
      message: "item added to inventory!",
      data: { ingredient: newItem, gptResponse: categorizedIngredient },
    })
  } catch (err) {
    // console.error(err)
  }
}

export default talkToTheBot
