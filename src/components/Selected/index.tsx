import React from "react"
import { DateScroll, Progress, Header, Details } from "./components"
import SelectedMap from "./components/SelectedMap"
import { useApp } from "@/contexts/contextApi"
const Selected: React.FC = () => {
  const { selectedRoute } = useApp()
  return (
    <>
      <Header />
      <Progress />
      <DateScroll />
      <Details />
      <SelectedMap route={selectedRoute} />
    </>
  )
}

export default Selected
