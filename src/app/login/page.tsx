"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/contexts/contextApi";
import { login } from "@/utils/backend_functions/login";
import { toast } from "react-toastify";
import { Axios, AxiosError } from "axios";

interface FormData {
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { setUser } = useApp();
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const onSubmit = async (data: FormData, e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await login(data);

      if (!user) {
        toast.error("Usuário não encontrado");
        return;
      }

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") {
        localStorage.setItem("userType", user.role);
        router.push("/admin");
        toast.success("Login efetuado com sucesso");
      } else {
        router.push("/");
        toast.success("Login efetuado com sucesso");
      }
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar a senha

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page-wrapper">
      <Logo />
      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div className="input-error-wrapper">
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
          </div>

          <span className="input-password-wrapper input-error-wrapper">
            <input
              placeholder="Senha"
              className="login-form-input"
              type={showPassword ? "text" : "password"} // Alternando o tipo de input baseado no estado
              disabled={loading}
              {...register("password", { required: true })}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="show-password-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
              </svg>
            </button>
            {errors.password && (
              <span className="error-message">Senha é obrigatória</span>
            )}
          </span>
          <button
            disabled={loading}
            className="login-form-button login-form-input"
            type="submit"
          >
            {loading ? "Carregando..." : "Entrar"}
          </button>
          <button>Entrar com reconhecimento facial</button>
        </form>

        <span>
          Não tem cadastro? <Link href="/register">Cadastre-se</Link>
        </span>
      </div>
    </div>
  );
};

export default Page;
