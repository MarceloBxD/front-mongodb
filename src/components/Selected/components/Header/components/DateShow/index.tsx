"use client"
import CalendarIcon from "@/assets/icons/CalendarIcon"
import { useApp } from "@/contexts/contextApi"
import { format_date, format_hour } from "@/utils/functions"
import React from "react"

const DateShow: React.FC = () => {
  const { selectedRoute } = useApp()

  if(!selectedRoute) return null

  return (
    <div className="flex items-center gap-[4px]">
      <CalendarIcon />
      <span className="text-[#A0A0A0] text-sm mx-[4px]">
        {format_date(selectedRoute.data_ida)} - {format_hour(selectedRoute?.hora_ida)}
      </span>
    </div>
  )
}

export default DateShow
