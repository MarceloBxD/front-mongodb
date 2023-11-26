import Route from "@/models/Route"
import connectMongoDB from "@/assets/lib/database"

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return new Response("id is required", { status: 400 })

  try {
    await connectMongoDB()

    const rota = await Route.findById(id)

    if (!rota) {
      return new Response("Rota não encontrada", { status: 400 })
    }

    return new Response(JSON.stringify(rota), { status: 200 })
  } catch (err: any) {
    return new Response(err.message, { status: 500 })
  }
}
