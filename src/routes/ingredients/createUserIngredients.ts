import { Request, Response } from "express"
import { pantry, NewPantry } from "@/db/schema/pantry"
import { db } from "@/db/db"

import talkToTheBot from "./utils/talkToTheBot"

const createMOFOPantry = async (req: Request, res: Response) => {
  try {
    const mofoList: NewPantry[] = req.body.pantry

    const result = await db.insert(pantry).values(mofoList)

    await talkToTheBot()

    return res.json({ message: " new items added to pantry", data: result })
  } catch (err) {
    console.error("could not create the muhfuckin pantry", err)
  }
}

export default createMOFOPantry
