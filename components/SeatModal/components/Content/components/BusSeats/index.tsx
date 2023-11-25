import { useApp } from "@/contexts/contextApi"
import Image from "next/image"
import React from "react"
import busSchema from "@/assets/bus-schema.png"
import BusSeatIcon from "@/assets/icons/BusSeatIcon"

const BusSeats: React.FC = () => {
  const { selectedRoute, setSeatsSelected, seatsSelected } = useApp()

  if (!selectedRoute) return null

  const { assentos } = selectedRoute

  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center rounded-xl relative">
      <Image src={busSchema} alt="Bus" layout="fill" objectFit="contain" />
      <div
        className="absolute grid
                grid-flow-col
                grid-rows-4
                gap-2 w-[80%] h-[75%]"
      >
        {assentos.map((seat) => (
          <div
            key={seat.id}
            className={`w-full h-full rounded-full flex items-center justify-center relative hover:scale-110 transition-all  duration-200 ${
              seat.ocupado ? "cursor-not-allowed" : "cursor-pointer"
            } flex-col

`}
            onClick={() => {
              if (seat.ocupado) return
              setSeatsSelected((seats) => {
                if (seats.find((s) => s.id === seat.id)) {
                  return seats.filter((s) => s.id !== seat.id)
                }
                return [...seats, seat]
              })
            }}
          >
            <BusSeatIcon
              isAvailable={!seat.ocupado}
              style={{
                color: seatsSelected.find((s) => s.id === seat.id)
                  ? "green"
                  : seat.ocupado
                  ? "#ccc"
                  : "#000",
              }}
            />
            <span className="text-xs">{seat.numero}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusSeats
