import Route from "@/models/Route"
import connectMongoDB from "../../../../lib/database"

export async function DELTE(req: Request) {
  const { searchParams } = new URL(req.url)

  const id = searchParams.get("id")

    try {
    await connectMongoDB()
      
    const route = await Route.findByIdAndDelete(id)

    if (!route) {
      return new Response("Rota não encontrada", { status: 400 })
    }

    return new Response(JSON.stringify(route), { status: 200 })
  } catch (err: any) {
    return new Response(err.message, { status: 500 })
  }
}
