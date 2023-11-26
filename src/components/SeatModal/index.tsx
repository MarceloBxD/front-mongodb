"use client"
import { useApp } from "@/contexts/contextApi"
import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"

const SeatModal: React.FC = () => {
  const { selectSeatModal, setSelectSeatModal, selectedRoute } = useApp()

  if (!selectSeatModal) return null

  return (
    <div className="w-screen h-screen bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] h-[90%] rounded-xl flex flex-col overflow-hidden">
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default SeatModal
