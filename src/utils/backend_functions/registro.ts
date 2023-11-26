import axios from "axios"
import { createParamsInUrl } from "../functions"

export const registro = async (data: any) => {
  const { name, email, password, confirmPassword } = data

  //   const params = createParamsInUrl({ email, password, confirmPassword })

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
    console.log(res)

    const user = await res.data

    if (!user) return null

    return user
  } catch (error) {
    console.log(error)
  }
  return null
}
