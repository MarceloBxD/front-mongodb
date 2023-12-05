"use client"
import LocationIcon from "@/assets/icons/LocationIcon"
import PersonIcon from "@/assets/icons/PersonIcon"
import { useApp } from "@/contexts/contextApi"
import { checkout } from "@/utils/backend_functions/checkout"
import { format_hour } from "@/utils/functions"
import React from "react"

const Summary: React.FC = () => {
  const { passengersInfo, selectedRoute, checkoutStep, setCheckoutStep } =
    useApp()
  const [loading, setLoading] = React.useState(false)

  const checkIfPassengersInfoIsFilled = () => {
    const isFilled = passengersInfo.every((passengerInfo) => {
      return (
        passengerInfo.passenger.name !== "" &&
        passengerInfo.passenger.cpf !== ""
      )
    })

    return isFilled
  }

  const handleCheckout = async () => {
    setLoading(true)
  }

  if (!selectedRoute) return null

  return (
    <div className="flex flex-col gap-4 w-full overflow-y-auto h-[600px] bg-gray-100 rounded-xl p-5 shadow-md">
      <div className="flex w-full justify-between items-center border-b-2 border-gray-200 pb-2">
        <span className="text-2xl font-bold">Resumo da compra</span>
      </div>

      <div className="flex flex-col gap-2 p-4 bg-white rounded-xl shadow-md">
        <div className="flex w-full justify-between items-center border-b-2 border-gray-200 pb-2">
          <span>
            Passagem de <b>IDA</b>
          </span>
          <div>
            <span>{selectedRoute?.data_ida}</span>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-full justify-between items-center border-b-2 border-gray-200 py-5">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <LocationIcon />
                <span className="text-md">Origem</span>
              </div>
              <span className="text-lg font-bold ml-8">
                {selectedRoute?.origem}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-md">Saída</span>
              <span className="text-lg font-bold">
                {format_hour(selectedRoute?.hora_ida)}
              </span>
            </div>
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <LocationIcon />
                <span className="text-md">Destino</span>
              </div>
              <span className="text-lg font-bold ml-8">
                {selectedRoute?.origem}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-md">Chegada</span>
              <span className="text-lg font-bold">
                {format_hour(selectedRoute.hora_chegada)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <PersonIcon />
          <span className="text-md font-bold">
            {passengersInfo.length}{" "}
            {passengersInfo.length > 1 ? "passageiros" : "passageiro"}
          </span>
        </div>
      </div>
      <button
        className={`${
          !checkIfPassengersInfoIsFilled()
            ? "opacity-50 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        } rounded-xl p-2 shadow-md`}
        disabled={!checkIfPassengersInfoIsFilled() || loading}
        onClick={() => {
          if (checkoutStep === 0) setCheckoutStep(checkoutStep + 1)
          else {
            handleCheckout()
          }
        }}
      >
        {loading
          ? "Carregando..."
          : checkoutStep === 0
          ? !checkIfPassengersInfoIsFilled()
            ? "Preencha os dados"
            : "Continuar"
          : "Finalizar compra"}
      </button>
    </div>
  )
}

export default Summary
