import User from "@/models/User"
import bcrypt from "bcrypt"
import connectMongoDB from "@/assets/lib/database"

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get("email")
  const password = searchParams.get("password")

  if (!email || !password)
    return new Response("Email and password are required", { status: 400 })

  try {
    await connectMongoDB()

    const user = await User.findOne({ email })

    if (!user) {
      return new Response("User not found", { status: 400 })
    }

    const passwordOk = bcrypt.compareSync(password, user.password)

    if (!passwordOk) {
      return new Response("Password incorrect", { status: 400 })
    }

    return new Response(JSON.stringify(user), { status: 200 })
  } catch (err: any) {
    return new Response(err.message, { status: 500 })
  }
}
