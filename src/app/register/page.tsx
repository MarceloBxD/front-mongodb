"use client"

import React from "react"
import { useForm } from "react-hook-form"
import Logo from "@/components/Logo"
import Link from "next/link"
import { registro } from "@/utils/backend_functions/registro"
import { useApp } from "@/contexts/contextApi"
import { useRouter } from "next/navigation"

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Register: React.FC = () => {
  const { setUser } = useApp()
  const [loading, setLoading] = React.useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const user = await registro(data)
      if (user) {
        setUser(user)
        router.push("/")
      } else throw new Error("Erro ao cadastrar usuário")
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  // Regex para verificar se a senha contém pelo menos um número e um caractere especial
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/

  // Função para validar se as senhas coincidem
  const validatePassword = (value: string) => {
    return value === watch("password") || "As senhas não coincidem"
  }

  return (
    <div className="register-page-wrapper">
      <Logo />
      <div className="register-form-wrapper">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastre-se</h2>
          <input
            placeholder="Nome completo"
            className="register-form-input"
            type="text"
            disabled={loading}
            {...register("name", {
              required: "Nome completo é obrigatório",
            })}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}

          <input
            placeholder="Email"
            className="register-form-input"
            type="email"
            disabled={loading}
            {...register("email", {
              required: "Email é obrigatório",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Email inválido" },
            })}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}

          <input
            placeholder="Senha"
            className="register-form-input"
            type="password"
            disabled={loading}
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
              pattern: {
                value: passwordRegex,
                message:
                  "A senha deve conter pelo menos um número e um caractere especial",
              },
            })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}

          <input
            placeholder="Confirmar senha"
            className="register-form-input"
            type="password"
            disabled={loading}
            {...register("confirmPassword", {
              required: "Confirmação de senha é obrigatória",
              validate: validatePassword,
            })}
          />
          {errors.confirmPassword && (
            <span className="error-message">
              {errors.confirmPassword.message}
            </span>
          )}

          <input
            className="register-form-button register-form-input"
            type="submit"
            disabled={loading}
            value={loading ? "Carregando..." : "Cadastrar"}
          />
        </form>
        <span>
          Já tem cadastro? <Link href="/login">Conecte-se</Link>
        </span>
      </div>
    </div>
  )
}

export default Register
