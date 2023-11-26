import axios from "axios"
import { createParamsInUrl } from "../functions"

export const login = async (data: any) => {
  const { email, password } = data

  const params = createParamsInUrl({ email, password })

  const url = `/api/auth/login?${params}`

  try {
    const res = await axios.post(url, null, { withCredentials: true })
    const user = await res.data

    if (!user) return null

    return user
  } catch (err) {
    console.log(err)
  }

  return null
}
