import { Ticket } from "@/models/Ticket"
import connectMongoDB from "@/assets/lib/database"

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const passengerName = searchParams.get("passengerName")
  const passengerEmail = searchParams.get("passengerEmail")
  const departureCity = searchParams.get("departureCity")
  const arrivalCity = searchParams.get("arrivalCity")
  const departureDate = searchParams.get("departureDate")
  const seatNumber = searchParams.get("seatNumber")
  const totalPrice = searchParams.get("totalPrice")
  const paymentMethod = searchParams.get("paymentMethod")
  const user = searchParams.get("user")

  try {
    await connectMongoDB()

    Ticket.create({
      passengerName,
      passengerEmail,
      departureCity,
      arrivalCity,
      departureDate,
      seatNumber,
      totalPrice,
      paymentMethod,
      user,
    })
  } catch (err: any) {
    new Response(err.message, { status: 500 })
  }
}
