import PassengersInfo from "@/components/SeatModal/components/Content/components/PassengersInfo"
import Summary from "@/components/Summary"
import React from "react"

const Page: React.FC = () => {
  return (
    <div className="
     grid
      grid-cols-2
      w-full
      bg-white rounded-xl
      p-5
      gap-5
      shadow-md

">
      <PassengersInfo />
      <Summary />
    </div>
  )
}

export default Page
