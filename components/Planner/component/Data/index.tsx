import React from "react"
import { FormValues } from "../.."

type Props = {
  value: FormValues
  setValue: React.Dispatch<React.SetStateAction<FormValues>>
  errors: any
  register: any
}

const Data: React.FC<Props> = ({ value, setValue, errors, register }) => {
  return (
    <div className="wrapper-input flex flex-col relative h-[65px]">
      <input
        className="input"
        type="date"
        placeholder="Ida"
        {...register("data", {
          required: "Data é obrigatória",
        })}
        value={value.data}
        onChange={(e) => setValue({ ...value, data: e.target.value })}
      />
      {errors.data && (
        <span className="error-message-home">{errors.data.message}</span>
      )}
    </div>
  )
}

export default Data
