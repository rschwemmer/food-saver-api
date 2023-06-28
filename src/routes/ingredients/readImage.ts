import { Request, Response } from "express"
import * as tesseract from "node-tesseract-ocr"
import fs from "fs"
import * as qs from "querystring"

const readImage = (req: Request, res: Response) => {
  try {
    // const config = {
    //   lang: "eng",
    //   oem: 1,
    //   psm: 3,
    // }

    let body = ""
    req.on("data", async function (data) {
      body += data
    })

    let receipt: Buffer
    req.on("end", async function () {
      // receipt = fs.readFileSync(body)
      console.log(__dirname + "../")
      fs.writeFileSync(__dirname + "/../test.pdf", body)

      console.log(body)
      if (body.length) {
        const test = tesseract
          .recognize(body)
          .then((text) => {
            console.log("Result:", text)
          })
          .catch((error) => {
            console.log("here")
            console.log(error)
          })
        return res.status(200).json({ message: "returned text", data: test })
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export default readImage
