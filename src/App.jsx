import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Empleados from "./components/Empleados";
import Reportes from "./components/Reportes";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/empleados"
          element={
            <ProtectedRoute>
              <Empleados />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reportes"
          element={
            <ProtectedRoute>
              <Reportes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
