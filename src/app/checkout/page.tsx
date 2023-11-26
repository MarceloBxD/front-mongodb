"use client"
import PassengersInfo from "@/components/SeatModal/components/Content/components/PassengersInfo"
import Summary from "@/components/Summary"
import { useApp } from "@/contexts/contextApi"
import { useRouter } from "next/navigation"
import React from "react"

const Page: React.FC = () => {
  const { seatsSelected, passengersInfo } = useApp()

  const router = useRouter()

  if (!seatsSelected || passengersInfo.length === 0)
    return (
      <div className="w-full h-[400px] flex flex-col items-center justify-center gap-4">
        <span className="text-2xl font-bold">
          Opa! Não temos dados para mostrar aqui.
        </span>
        <button
          className="bg-blue-500 text-white rounded-md p-2"
          onClick={() => router.push("/")}
        >
          Voltar para o início
        </button>
      </div>
    )

  return (
    <div className="grid grid-cols-2 w-full bg-white rounded-xl p-5 gap-5 shadow-md">
      <PassengersInfo />
      <Summary />
    </div>
  )
}

export default Page
