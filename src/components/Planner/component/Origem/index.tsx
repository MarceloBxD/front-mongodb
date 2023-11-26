import React from "react"
import { FormValues } from "../.."
type Props = {
  value: FormValues
  setValue: React.Dispatch<React.SetStateAction<FormValues>>
  errors: any
  register: any
}
const Origem: React.FC<Props> = ({ setValue, value, errors, register }) => {
  return (
    <div className="wrapper-input flex flex-col h-[65px] relative">
      <input
        className="input"
        type="text"
        placeholder="Origem"
        {...register("origem", { required: "Origem é obrigatória" })}
        value={value.origem}
        onChange={(e) => setValue({ ...value, origem: e.target.value })}
      />
      {errors.origem && (
        <span className="error-message-home origin-error">
          {errors.origem.message}
        </span>
      )}
    </div>
  )
}

export default Origem
