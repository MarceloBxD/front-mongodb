import React from "react"
import { FormValues } from "../.."

type Props = {
  value: FormValues
    setValue: React.Dispatch<React.SetStateAction<FormValues>>
    register:any
  errors:any
}
const Destino: React.FC<Props> = ({ setValue, value,errors,register }) => {
  return (
    <div className="flex relative h-[65px]">
      <input
        className="input"
        type="text"
        placeholder="Destino"
        {...register("destino", {
          required: "Destino é obrigatório",
        })}
        value={value.destino}
        onChange={(e) => setValue({ ...value, destino: e.target.value })}
      />
      {errors.destino && (
        <span className="error-message-home destiny-error">
          {errors.destino.message}
        </span>
      )}
    </div>
  )
}

export default Destino
