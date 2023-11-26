import { useApp } from "@/contexts/contextApi"
import React, { useEffect,useCallback } from "react"

const PassengersInfo: React.FC = () => {
  const { seatsSelected, setSeatsSelected,setPassengersInfo,passengersInfo } = useApp()

    
    const handlePassengersInfo = useCallback(() => {
        const passengersInfo = seatsSelected.map((seat) => ({
        passenger: {
            name: "",
            cpf: "",
        },
        seat: {
            numero: seat.numero,
        },
        }))
        setPassengersInfo(passengersInfo)
    }, [seatsSelected])
    
    useEffect(() => {
        handlePassengersInfo()
    }, [handlePassengersInfo])
    

    return (
        <div className="
w-[80%]
grid
gap-5
grid-cols-2
mx-auto



">
            {passengersInfo.length === 0 ? <>
            <span className="text-center">Selecione os assentos</span>
            
            </> : passengersInfo.map((passengerInfo, index) => (
                <div className="flex flex-col gap-2 w-full">
                    <span>Passageiro {index + 1} - Assento {passengerInfo.seat.numero}</span>
                    <div className="flex flex-col gap-2">
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="CPF" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PassengersInfo
