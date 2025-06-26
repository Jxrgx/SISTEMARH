import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <nav className="bg-blue-900 text-white p-4 flex items-center space-x-4">
      <Link to="/" className="hover:bg-blue-700 px-4 py-2 rounded">
        Home
      </Link>
      <Link to="/empleados" className="hover:bg-blue-700 px-4 py-2 rounded">
        Empleados
      </Link>
      <Link to="/reportes" className="hover:bg-blue-700 px-4 py-2 rounded">
        Reportes
      </Link>

      {user && (
        <div className="ml-auto flex items-center space-x-4">
          <span className="text-sm">
            {user.email}
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

  