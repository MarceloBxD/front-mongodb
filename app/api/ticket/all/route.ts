import { Ticket } from "@/models/Ticket"
import connectMongoDB from "../../../../lib/database"

export async function GET() {
  try {
    await connectMongoDB()
    const tickets = await Ticket.find()

    if (tickets.length === 0 || !tickets) {
      return new Response("Nenhum ticket encontrado", { status: 400 })
    }
    return new Response(JSON.stringify(tickets), { status: 200 })
  } catch (err: any) {
    new Response(err.message, { status: 500 })
  }
}
