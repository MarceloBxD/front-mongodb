"use client"

import React from "react"
import { useForm } from "react-hook-form"
import Logo from "../../components/Logo"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useApp } from "../../contexts/contextApi"

interface FormData {
  email: string
  password: string
}

const Page: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const { setUser } = useApp()
  const [loading, setLoading] = React.useState(false)

  const router = useRouter()

  const onSubmit = async (data: FormData, e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const dataResponse = await res.json()

      const userData = dataResponse.data.user
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))

      if (dataResponse.data.user.role === "admin") {
        localStorage.setItem("userType", userData.role)
        router.push("/admin")
      } else {
        router.push("/")
      }
    } catch (err) {
      alert("Erro ao fazer login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page-wrapper">
      <Logo />
      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <input
            placeholder="Email"
            className="login-form-input"
            type="email"
            disabled={loading}
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email && (
            <span className="error-message">
              Email é obrigatório e deve ser válido
            </span>
          )}

          <input
            placeholder="Senha"
            className="login-form-input"
            type="password"
            disabled={loading}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error-message">Senha é obrigatória</span>
          )}
          <button disabled={loading} className="login-form-button login-form-input" type="submit">
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>

        <span>
          Não tem cadastro? <Link href="/register">Cadastre-se</Link>
        </span>
      </div>
    </div>
  )
}

export default Page
