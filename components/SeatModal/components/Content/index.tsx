import RoutePath from "@/components/Selected/components/Header/components/RoutePath"
import React from "react"
import SeatsSelecteds from "./components/SeatsSelecteds"
import BusSeats from "./components/BusSeats"
import Legenda from "./components/Legenda"

const Content: React.FC = () => {
  return (
    <div className="p-5 flex flex-col h-full overflow-y-auto bg-white rounded-b-xl gap-12">
      <div className="flex flex-row justify-between items-center">
        <RoutePath />
        <SeatsSelecteds />
      </div>
      <BusSeats />
      <Legenda />
    </div>
  )
}

export default Content
