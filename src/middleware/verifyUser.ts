import { Request, Response } from "express"
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node"

const verifyUser = async (req: Request, res: Response) => {
  ClerkExpressWithAuth(req, res)
}

export default verifyUser
