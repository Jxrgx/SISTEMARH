import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Escuchamos los cambios de autenticación
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Limpiar el listener al desmontar
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar el contexto fácilmente
export function useAuth() {
  return useContext(AuthContext);
}
