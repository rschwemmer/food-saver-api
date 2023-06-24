import { z } from "zod"

export const createUserSchema = {
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    email: z.string(),
    clerkId: z.string(),
  }),
}
