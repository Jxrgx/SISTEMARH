import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config"; // Ojo: subimos un nivel porque está fuera de components

const Login = () => {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Usuario logueado:", user);
        alert(`Bienvenido ${user.displayName}`);
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
