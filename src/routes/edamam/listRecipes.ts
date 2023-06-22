import axios from "axios"

async function listRecipes() {
  const response = await axios.get("https://api.edamam.com/api/recipes/v2")
  return response.data
}

export default listRecipes
