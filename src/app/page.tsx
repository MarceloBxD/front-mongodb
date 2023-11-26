import Banner from "../components/Banner"
import Planner from "../components/Planner"
import TripList from "../components/TripList"

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <Banner />
      <Planner />
      <TripList />
    </div>
  )
}
