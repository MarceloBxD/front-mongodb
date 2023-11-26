import RoutePath from "@/components/Selected/components/Header/components/RoutePath"
import React, { useEffect } from "react"
import SeatsSelecteds from "./components/SeatsSelecteds"
import BusSeats from "./components/BusSeats"
import Legenda from "./components/Legenda"
import PassengersInfo from "./components/PassengersInfo"
import { useApp } from "@/contexts/contextApi"

const Content: React.FC = () => {
  const [buttonDisabled, setButtonDisabled] = React.useState(true)
  const { passengersInfo } = useApp()


  useEffect(() => {
    const check = passengersInfo.every((passenger) => {
      return (
        passenger.passenger.name !== "" &&
        passenger.passenger.cpf !== ""
      )
    })
    console.log(check)

    setButtonDisabled(!check)
  }, [passengersInfo])

  return (
    <div className="p-5 flex flex-col h-full overflow-y-auto bg-white rounded-b-xl gap-4">
      <div className="flex flex-row justify-between items-center">
        <RoutePath />
        <SeatsSelecteds />
      </div>
      <div className="w-full flex-col-reverse flex items-center gap-8">
        <BusSeats />
        <div
          className="
          flex
          flex-row
          gap-4
          w-[75%]
          justify-between
items-center "
        >
          <Legenda />
          {passengersInfo.length !== 0 && (
            <button
              disabled={buttonDisabled}
              className={`
              ${buttonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 cursor-pointer hover:bg-green-600"}
            text-white
            rounded-xl
            p-2
            
            transition-all
            duration-200
h-[40px]

`}
            >
              Salvar dados e ir para pagamento
            </button>
          )}
        </div>
      </div>
      <PassengersInfo />
    </div>
  )
}

export default Content
