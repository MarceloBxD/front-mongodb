import React from "react"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="w-full h-[320px] relative">
      <Image
        src={require("@/assets/banner-home.svg")}
        alt="Banner principal da home"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
