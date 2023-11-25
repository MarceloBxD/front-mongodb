import clientPromise from "../lib/mongodb"
import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  Metadata,
} from "next"
import Banner from "../components/Banner"
import Planner from "../components/Planner"
import TripList from "../components/TripList"
import "../styles/globals.css"
import "../styles/home.css"
import "../styles/register.css"
import "../styles/login.css"
import { Inter, Montserrat } from "next/font/google"
import { AppProvider } from "../contexts/contextApi"

const inter = Inter({ subsets: ["latin"] })

const montserrat = Montserrat({
  subsets: ["latin"],
})

type ConnectionStatus = {
  isConnected: boolean
}

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export const metadata: Metadata = {
  title: "NextAuto",
  description: "Sistema de reserva de passagem de ônibus",
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <AppProvider>
    <main>
      <Banner />
      <Planner />
      <TripList />
    </main>
</AppProvider>
  )
}
