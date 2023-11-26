import Route from "../../../../models/Route"
import connectMongoDB from "../../../../lib/database"

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url)

  const id = searchParams.get("id")
  const origem = searchParams.get("origem")
  const destino = searchParams.get("destino")
  const horaPartida = searchParams.get("horaPartida")
  const dataPartida = searchParams.get("dataPartida")
  const passagens = searchParams.get("passagens")

  if (!id) return new Response("id is required", { status: 400 })

  try {
    await connectMongoDB()

    const route = await Route.findByIdAndUpdate(id, {
      origem,
      destino,
      horaPartida,
      dataPartida,
      passagens,
    })

    if (!route) {
      return new Response("Rota não encontrada", { status: 400 })
    }

    return new Response(JSON.stringify(route), { status: 200 })
  } catch (err: any) {
    new Response(err.message, { status: 500 })
  }
}
