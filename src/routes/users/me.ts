import { Request, Response } from "express"
import { WithAuthProp, sessions } from "@clerk/clerk-sdk-node"
import { db } from "@/db/db"
import { users } from "@/db/schema/users"
import { eq } from "drizzle-orm"

const getMe = async (req: WithAuthProp<Request>, res: Response) => {
  // grab clerk userId from the request
  const clerkId = req.auth.userId

  if (!clerkId) return res.status(400).json({ message: "User not found" })

  // find the matching user
  const user = await db
    .select({
      id: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      clerkId: users.clerkId,
    })
    .from(users)
    .where(eq(users.clerkId, clerkId))

  return res.json({ message: "success", data: user })
}

export default getMe
