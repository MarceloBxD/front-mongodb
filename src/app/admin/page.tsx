"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePathname,useRouter } from "next/navigation";
import { useApp } from "@/contexts/contextApi";

export default function Admin () {
  const [selectedButton, setSelectedButton] = useState<string>("");
  const [routeId, setRouteId] = useState<string>("");
  
  const router = useRouter()

  const handleDeleteRoute = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios
        .delete(`http://localhost:3001/routes/delete-route/${routeId}`)
        .then(() => {
          alert("Rota deletada com sucesso");
          router.push("/admin")
        });
    } catch (err) {
      console.log(err);
    }
  };

  const adminOptions = [
    {
      name: "Cadastrar nova rota",
    },
    {
      name: "Apagar rota existente",
    },
    {
      name: "Atualizar rota existente",
    },
  ];

  useEffect(() => {
    const verifyUserType = async () => {
      const userType = localStorage.getItem("userType");
      if (userType !== "admin") {
        router.push("/");
      }
    };
    verifyUserType();
  }, []);

  return (
    <div className="w-screen flex gap-4 flex-col items-center  p-5 justify-center ">
      <h1 className="font-bold text-2xl">Página de Admin</h1>

      <div className="flex flex-col gap-4">
        {adminOptions.map((option,index) => (
          <button
            key={index}
            value={selectedButton}
            onClick={() => {
              setSelectedButton(option.name);
            }}
            className="bg-[#213a5c] hover:bg-[#213a5c]/90 text-white font-bold py-2 px-4 rounded"
          >
            {option.name}
          </button>
        ))}

        <a
          className="font-bold text-center hover:underline py-2 px-4 rounded"
          href="/"
        >
          Voltar
        </a>
      </div>

      {selectedButton === "Cadastrar nova rota" && (
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Cadastrar nova rota</h1>
          <form className="flex flex-col gap-4">
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Origem"
              type="text"
              name="origin"
              id="origin"
            />
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Destino"
              type="text"
              name="destination"
              id="destination"
            />
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Horário de partida"
              type="text"
              name="departureTime"
              id="departureTime"
            />
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Horário de chegada"
              type="text"
              name="arrivalTime"
              id="arrivalTime"
            />
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Preço"
              type="text"
              name="price"
              id="price"
            />
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Data"
              type="date"
              name="date"
              id="date"
            />
          </form>
        </div>
      )}
      {selectedButton === "Apagar rota existente" && (
        <div>
          <form
            className="w-full flex flex-col justify-center gap-4"
            onSubmit={handleDeleteRoute}
          >
            <input
              value={routeId}
              onChange={(e) => setRouteId(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Insira o ID da rota"
              type="text"
            />
            <button
              className="text-center text-red-500 hover:text-red-900"
              type="submit"
            >
              Deletar rota
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
