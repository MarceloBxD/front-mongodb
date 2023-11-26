import PersonIcon from "@/assets/icons/PersonIcon"
import { useApp } from "@/contexts/contextApi"
import React from "react"

const PassengersNumber: React.FC = () => {
  const { selectedRoute } = useApp()
  
  const calculateNumberOfSeatsRemaining = () => {
    if (selectedRoute) {
      const assentos = selectedRoute.assentos
      let availableSeats = 0
      
      for (let i = 0; i < assentos.length; i++) {
        if (assentos[i].ocupado === false) {
          availableSeats++
        }
      }
      
      return availableSeats
    }
    
    return 0
  }
  
  
  return (
    <div className="flex items-center gap-[4px]">
      <PersonIcon />
      <span className="text-[#A0A0A0] text-sm">
        {calculateNumberOfSeatsRemaining()} assentos disponíveis
      </span>
    </div>
  )
}

export default PassengersNumber
