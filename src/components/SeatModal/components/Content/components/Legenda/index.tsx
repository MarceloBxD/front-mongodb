import BusSeatIcon from "@/assets/icons/BusSeatIcon"
import React from "react"

// import { Container } from './styles';

const Legenda: React.FC = () => {
  const items = [
    {
      title: "Disponível",
      icon: (
        <BusSeatIcon
          isAvailable
          style={{
            color: "#000",
          }}
        />
      ),
    },
    {
      title: "Selecionado",
      icon: (
        <BusSeatIcon
          isAvailable
          style={{
            color: "green",
          }}
        />
      ),
    },
    {
      title: "Indisponível",
      icon: (
        <BusSeatIcon
          isAvailable
          style={{
            color: "#ccc",
          }}
        />
      ),
    },
  ]

  return (
    <div
      className="
        w-fit
        flex
        flex-col
        justify-center
        items-start
        rounded-xl gap-5 "
    >
      <span className="text-sm w-full text-center font-bold">Legenda</span>
      <div className="h-[50px] flex flex-row  items-center rounded-xl relative">
        {items.map((item) => (
          <div
            key={item.title}
            className={`w-[100px] h-[50px] rounded-full flex items-center justify-center relative hover:scale-110 transition-all  duration-200 ${
              item.title ? "cursor-not-allowed" : "cursor-pointer"
            } flex-col`}
          >
            {item.icon}
            <span className="text-xs">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Legenda
