import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex space-x-4">
      <Link to="/" className="hover:bg-blue-700 px-4 py-2 rounded">
        Home
      </Link>
      <Link to="/empleados" className="hover:bg-blue-700 px-4 py-2 rounded">
        Empleados
      </Link>
      <Link to="/reportes" className="hover:bg-blue-700 px-4 py-2 rounded">
        Reportes
      </Link>
    </nav>
  );
};

export default NavBar;

  