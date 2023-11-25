import AcIcon from "@/assets/icons/AcIcon"
import RestroomIcon from "@/assets/icons/RestroomIcon"
import SeatIcon from "@/assets/icons/SeatIcon"
import React from "react"

const BusInfos: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <h1 className="text-2xl font-bold text-right">Ônibus semi-leito</h1>
      <div className="flex w-full justify-end gap-2">
        <span className="text-right">Poltronas reclináveis</span>
        <SeatIcon />
      </div>
      <div className="flex w-full justify-end gap-2">
        <span className="text-right">Ar condicionado</span>
        <AcIcon />
      </div>
      <div className="flex w-full justify-end gap-2">
        <span className="text-right">Banheiro</span>
        <RestroomIcon />
      </div>
    </div>
  )
}

export default BusInfos
