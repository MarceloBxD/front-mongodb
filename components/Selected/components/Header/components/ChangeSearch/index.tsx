import { useApp } from "@/contexts/contextApi"
import Link from "next/link"
import React from "react"

const ChangeSearch: React.FC = () => {
  const { setSelectedRoute } = useApp()
  return (
    <Link href="/">
      <button
        className="
    bg-white
    border
    border-[#e3e3e3]
    rounded-md
    text-[#4a4a4a]
    text-sm
    py-2
    px-4
w-fit
    hover:bg-[#f7f7f7]
    transition
    duration-200
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-[#4285f4]
    focus:ring-opacity-50
    hover:shadow-md
    md:mt-0

"
        onClick={() => {
          setSelectedRoute(null)
        }}
      >
        Alterar Busca
      </button>
    </Link>
  )
}

export default ChangeSearch
