import bcrypt from "bcrypt"
import User from "@/models/User"
import connectMongoDB from "@/assets/lib/database"

const saltRounds = 10

export async function POST(req: Request) {
  const { name, email, password, confirmPassword, role } = await req.json()

  if (!name || !role || !email || !password || !confirmPassword) {
    return new Response("All fields are required", { status: 400 })
  }
  if (password !== confirmPassword) {
    new Response("Passwords don't match", { status: 400 })
  }

  try {
    await connectMongoDB()

    let userExists = await User.findOne({ email })

    if (userExists) {
      return new Response("User already exists", { status: 400 })
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    let newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    })

    return new Response(JSON.stringify(newUser), { status: 201 })
  } catch (err: any) {
    return new Response(err.message, { status: 400 })
  }
}
