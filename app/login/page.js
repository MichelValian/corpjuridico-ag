export default function LoginPage() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 relative">
        {/* Fondo degradado */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-gray-200 to-blue-100 h-3/3 w-full"></div>
        
        <div className="relative w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
          <div className="flex justify-center">
            <img src="/img/logo.png" alt="Logo" className="h-12" />
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-600">¡Bienvenido de nuevo!</h2>
          <p className="block text-sm font-medium text-gray-500">Inicie sesión en su cuenta para continuar.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
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
          </form>
        </div>
      </div>
    );
}
