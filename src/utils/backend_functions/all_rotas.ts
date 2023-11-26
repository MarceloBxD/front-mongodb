import axios from "axios"

export const allRotas = async () => {
  const url = `/api/rotas/all`

  try {
    const res = await axios.get(url)

    console.log(res)

    return []
  } catch (err: any) {
    console.log(err)
  }

  return null
}
