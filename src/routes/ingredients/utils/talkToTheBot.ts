import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: String(process.env.CHAT_GPT_KEY),
})

const talkToTheBot = async () => {
  const openAI = new OpenAIApi(configuration)

  const response = await openAI.listModels()

  console.log(response)

  return
}

export default talkToTheBot
