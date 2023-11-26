import React from "react"
import { FormValues } from "../.."

type Props = {
  value: FormValues
  setValue: React.Dispatch<React.SetStateAction<FormValues>>
  register: any
  errors: any
}

const Passageiros: React.FC<Props> = ({
  setValue,
  value,
  errors,
  register,
}) => {
  return (
    <div className="flex flex-col relative h-[65px]">
      <input
        className="input"
        type="number"
        placeholder="Passageiros"
        {...register("passageiros", {
          required: "Número de passageiros é obrigatório",
          valueAsNumber: true,
          // validate: (value:any) => !!value.passageiros || "Selecione algum passageiro.",
        })}
        value={value.passageiros}
        onChange={(e) =>
          setValue({
            ...value,
            passageiros: Number(e.target.value),
          })
        }
      />
      {errors.passageiros && (
        <span className="error-message-home">{errors.passageiros.message}</span>
      )}
    </div>
  )
}

export default Passageiros
