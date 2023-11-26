import bcrypt from "bcrypt"
import { User } from "../../../../models/User"

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get("name")
  const role = searchParams.get("role")
  const email = searchParams.get("email")
  const password = searchParams.get("password")
  const confirmPassword = searchParams.get("confirmPassword")
  
  if (!name || !role || !email || !password || !confirmPassword) {
    return new Response("All fields are required", { status: 400 })
  }
  
  try {

    const saltRounds = 10

    if (password !== confirmPassword) {
      new Response("Passwords don't match", { status: 400 })
    }

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
    console.log("Erro ao criar usuário", err)
    return new Response(err.message, { status: 400 })
  }
}