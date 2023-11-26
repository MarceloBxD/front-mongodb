import RoutePath from "@/components/Selected/components/Header/components/RoutePath"
import React from "react"
import SeatsSelecteds from "./components/SeatsSelecteds"
import BusSeats from "./components/BusSeats"
import Legenda from "./components/Legenda"
import PassengersInfo from "./components/PassengersInfo"

const Content: React.FC = () => {
  return (
    <div className="p-5 flex flex-col h-full overflow-y-auto bg-white rounded-b-xl gap-4">
      <div className="flex flex-row justify-between items-center">
        <RoutePath />
        <SeatsSelecteds />
      </div>
      <div className="w-full flex-col-reverse flex items-center gap-8">
      <BusSeats />
      <Legenda />
      </div>
      <PassengersInfo />
    </div>
  )
}

export default Content
