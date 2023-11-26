import { connectMongoDB } from "../../../lib/database"
import { User } from "../../../models/User"
import bcrypt from "bcrypt"

async function login(req: any, res: any) {
const { email, password } = req.body

  await connectMongoDB()

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        error: "User not found",
      })
    }

    const passwordOk = bcrypt.compareSync(password, user.password)

    if (!passwordOk) {
      return res.status(400).json({
        message: "Wrong password",
      })
    }

    return res.status(200).json({
      message: "Login successful",
      user,
    })
  } catch (err) {
    console.log("Erro ao encontrar usuario", err)
    return res.status(400).json({
      message: err,
    })
  }

}

export function handler(req: any, res: any) {
  console.log(req.method)
  if (req.method === "POST") {
    return login(req, res)
  } else if (req.method === "GET") {
    return res.status(200).json({
      message: "Hello World",
    })
  } else {
    return res.status(400).json({
      message: "Method not allowed",
    })
  }
}

