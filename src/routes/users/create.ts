import { Request, Response } from "express"
import { db } from "@/db/db"
import { NewUser, users } from "@/db/schema/users"

const create = async (req: Request, res: Response) => {
  try {
    const newUser: NewUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      clerkId: req.body.clerkId,
    }

    await db.insert(users).values(newUser)

    return res.status(200).json({ message: "created user" })
  } catch (err) {
    console.error("error creating user", err)
  }
}

export default create
