import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './index.css';

function Login() {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // URL base del backend desde variable de entorno
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const maxRetries = 3;
    const retryDelay = 1000; // 1 segundo

    for (let i = 0; i < maxRetries; i++) {
      try {
        console.log(`📨 Enviando datos (Intento ${i + 1}/${maxRetries}):`, gmail.trim(), "password_oculta");

        // Verifica si el backend está disponible, pero no detiene el login si falla
        try {
          await axios.get(`${API_BASE_URL}/health`);
          console.log("✅ Backend disponible");
        } catch (healthErr) {
          console.warn("⚠ No se pudo verificar /health, pero se continuará con el login");
        }

        // Intento de login
        const res = await axios.post(`${API_BASE_URL}/auth/login`, {
          gmail: gmail.trim(),
          password: password.trim(),
        });

        const { rol, token, user } = res.data;

        if (token) localStorage.setItem("token", token);
        if (rol) localStorage.setItem("rol", rol);
        if (user?.gmail) localStorage.setItem("gmail", user.gmail);

        console.log(`✅ Login correcto - Rol: ${rol}`);

        setGmail("");
        setPassword("");
        setLoading(false);

        const cleanRol = rol?.trim().toLowerCase();

        switch (cleanRol) {
          case "admin":
            navigate("/admin");
            break;
          case "docente":
            navigate("/docente");
            break;
          case "estudiante":
            navigate("/estudiante");
            break;
          case "padre":
            navigate("/padre");
            break;
          case "auxiliar":
            navigate("/auxiliar");
            break;
          default:
            console.error("❌ Rol no reconocido:", cleanRol);
            setError("Rol no reconocido.");
        }

        return; // login exitoso, salir del for

      } catch (err) {
        console.error(`❌ Error en el intento ${i + 1}:`, err);
        if (i < maxRetries - 1) {
          setError(`Error de conexión. Reintentando... (${i + 1}/${maxRetries})`);
          await sleep(retryDelay);
        } else {
          if (err.response?.data?.mensaje) {
            setError(err.response.data.mensaje);
          } else if (err.response?.data?.message) {
            setError(err.response.data.message);
          } else {
            setError("Credenciales inválidas o error en el servidor. Inténtalo de nuevo.");
          }
        }
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-yellow-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-4xl shadow-md w-96"
      >
        <div className="flex justify-center mb-6">
          <img
            src="logo.png"
            alt="Logo Institución"
            className="h-15 w-20 sm:h-25 sm:w-28"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">Bienvenido</h2>
        {error && (
          <div className="bg-red-100 text-red-600 p-2 mb-4 rounded">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-1">Correo electrónico</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded bg-gray-50"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            name="gmail"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Contraseña</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-2xl hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
}

export default Login;
