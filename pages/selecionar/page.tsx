"use client"

import Selected from "@/components/Selected"
import { useApp } from "@/contexts/contextApi"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"

const Page: React.FC = () => {
  const { rotas, setSelectedRoute } = useApp()

  const searchParams = useSearchParams()
  const id = searchParams.get("id")

  const router = useRouter()

  React.useEffect(() => {
    if (!id) return

    const route = rotas.find((rota) => rota.id === Number(id))

    if (!route) {
      router.push("/")
      return
    } else {
      setSelectedRoute(route)
    }
  }, [rotas, id])

  return <Selected />
}

export default Page
