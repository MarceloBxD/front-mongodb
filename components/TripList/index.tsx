"use client"
import React from "react"
import { useApp } from "@/contexts/contextApi"
import { TripItem } from "./components"

const TripList: React.FC = () => {
  const { rotas } = useApp()
  return (
    <div className="w-full max-w-[1600px] flex-col align-center justify-center m-auto py-5">
      <h2 className="text-center uppercase text-2xl font-bold text-gray-800 mb-4 ">
        Viagens disponíveis
      </h2>
      <div className="w-full flex flex-col gap-4">
        {rotas.map((rota,index) => {
          return <TripItem rota={rota} key={index} />
        })}
      </div>
    </div>
  )
}

export default TripList
