"use client"
import CloseIcon from "@/assets/icons/CloseIcon"
import { useApp } from "@/contexts/contextApi"
import React, { useEffect, useCallback } from "react"

const PassengersInfo: React.FC = () => {
  const { seatsSelected, setSeatsSelected, setPassengersInfo, passengersInfo } =
    useApp()

  const handlePassengersInfo = useCallback(() => {
    const newPassengersInfo = seatsSelected.map((seat, index) => {
      return {
        id: index,
        seat: seat,
        passenger: {
          name: "",
          cpf: "",
        },
      }
    })
    setPassengersInfo(newPassengersInfo)
  }, [seatsSelected, setPassengersInfo])

  useEffect(() => {
    handlePassengersInfo()
  }, [handlePassengersInfo])

  return (
    <div className="flex flex-col
    gap-4
    w-full
    overflow-y-auto
    h-[600px]
    bg-gray-100
    rounded-xl
    p-5
    shadow-md

">
      {passengersInfo.map((passengerInfo, index) => (
        <div
          className="flex flex-col gap-2 w-full bg-white p-4 rounded-md shadow-md"
          key={index}
        >
          <div className="flex items-center justify-between">
            <span>
              Passageiro {index + 1} - Assento {passengerInfo.seat.numero}
            </span>
            <CloseIcon
              style={{
                width: "25px",
                height: "25px",
              }}
              onClick={() => {
                const newSeatsSelected = [...seatsSelected]
                newSeatsSelected.splice(index, 1)
                setSeatsSelected(newSeatsSelected)
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Nome"
              value={passengerInfo.passenger.name}
              onChange={(e) => {
                const newPassengersInfo = [...passengersInfo]
                newPassengersInfo[index].passenger.name = e.target.value
                setPassengersInfo(newPassengersInfo)
              }}
            />
            <input
              type="text"
              placeholder="CPF"
              value={passengerInfo.passenger.cpf}
              onChange={(e) => {
                const newPassengersInfo = [...passengersInfo]
                newPassengersInfo[index].passenger.cpf = e.target.value
                setPassengersInfo(newPassengersInfo)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PassengersInfo
