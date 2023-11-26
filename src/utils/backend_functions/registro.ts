import axios from "axios"
import { useRouter } from "next/navigation"
import { useApp } from "@/contexts/contextApi"

export const registro = async (data: any) => {
  const { name, email, password, confirmPassword } = data
  const url = `/api/auth/create_user`

  try {
    const res = await axios.post(
      url,
      {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        role: "user",
      },
      { withCredentials: true }
    )
    const user = await res.data

    if (!user) return null

    return user
  } catch (error) {
    console.log(error)
  }
  return null
}
