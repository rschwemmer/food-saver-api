import { openai } from "@/index"
import { Request, Response } from "express"

const listAvailableRecipes = async (req: Request, res: Response) => {
  // TODO: make this an actual list
  const ingredients = ["chicken", "onion", "flour"]
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content: `Pretend you are a professional chef and give me a recipe that incorporates the following ingredients: ${ingredients.toString()}. format it into a json-friendly response.`,
        },
      ],
    })
    console.log(chatCompletion.data.choices)
    return res.json({ message: "success", data: chatCompletion.data.choices })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "ChatGPT Error" })
  }
}

export default listAvailableRecipes
