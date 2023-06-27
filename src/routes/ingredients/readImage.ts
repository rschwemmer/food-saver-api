import { Request, Response } from "express"
import * as tesseract from "node-tesseract-ocr"
import fs from "fs"

const readImage = (req: Request, res: Response) => {
  try {
    const url =
      "https://i.pinimg.com/originals/99/97/02/99970232c4c2debdfeeabf947258caad.jpg"
    const config = {
      lang: "eng",
      oem: 1,
      psm: 3,
    }

    const test = tesseract
      .recognize(url, config)
      .then((text) => {
        console.log("Result:", text)
      })
      .catch((error) => {
        console.log(error.message)
      })

    return res.status(200).json({ message: "returned text", data: test })
  } catch (err) {
    console.log(err)
  }
}

export default readImage
