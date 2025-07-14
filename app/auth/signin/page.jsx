"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // <- estado para mostrar contraseña
  const router = useRouter();

  const onSubmit = async (data) => {
    setError(null);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-gray-200 to-blue-100 h-full w-full"></div>

      <div className="relative w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <div className="flex justify-center">
          <img src="/img/logo.png" alt="Logo" className="h-12" />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-600">¡Bienvenido de nuevo!</h2>
        <p className="block text-sm font-medium text-gray-500">
          Inicie sesión en su cuenta para continuar.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                className="mt-1 w-full rounded-md border border-gray-300 p-2 pr-10 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-700 hover:text-blue-900"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Recuérdame
              </label>
            </div>
            <a href="#" className="text-sm text-blue-700 hover:text-blue-900">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-950 px-4 py-2 text-white hover:bg-blue-900"
          >
            Iniciar sesión
          </button>

          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}
