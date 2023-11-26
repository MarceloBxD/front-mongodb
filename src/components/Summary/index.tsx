"use client"
import LocationIcon from "@/assets/icons/LocationIcon"
import { useApp } from "@/contexts/contextApi"
import React from "react"

const Summary: React.FC = () => {
  const { passengersInfo, seatsSelected, selectedRoute } = useApp()
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LocationIcon />
                <span className="text-md">Origem</span>
              </div>
              <span className="text-lg font-bold ml-8">{selectedRoute?.origem}</span>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <span className="text-md">Saída</span>
              <span className="text-lg font-bold">
                {selectedRoute?.hora_ida}
              </span>
            </div>
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LocationIcon />
                <span className="text-md">Destino</span>
              </div>
              <span className="text-lg font-bold ml-8">{selectedRoute?.origem}</span>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <span className="text-md">Chegada</span>
              <span className="text-lg font-bold">
                {selectedRoute?.hora_chegada}
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <span>
            {passengersInfo.length}{" "}
            {passengersInfo.length > 1 ? "passageiros" : "passageiro"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Summary
