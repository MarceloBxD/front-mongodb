import { Ticket } from "@/models/Ticket"

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)

  const id = searchParams.get("id")

  try {
    const ticket = await Ticket.findById(id)

    if (!ticket) {
      return new Response("Ticket não encontrado", { status: 400 })
    }

    return new Response(JSON.stringify(ticket), { status: 200 })
  } catch (err:any) {
    new Response(err.message, { status: 500 })
  }
}
