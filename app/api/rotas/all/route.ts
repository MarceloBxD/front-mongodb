import Route from "../../../../models/Route"
import connectMongoDB from "../../../../lib/database"

export async function GET() {
  try {
    await connectMongoDB()

    const rotas = await Route.find()

    if (rotas.length === 0) {
      return new Response("Nenhuma rota encontrada", { status: 400 })
    }

    return new Response(JSON.stringify(rotas), { status: 200 })
  } catch (err: any) {
    return new Response(err.message, { status: 500 })
  }
}
