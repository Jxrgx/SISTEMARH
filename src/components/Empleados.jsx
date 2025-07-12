import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    puesto: "",
    correo: "",
  });

  const empleadosCollection = collection(db, "empleados");

  const obtenerEmpleados = async () => {
    const data = await getDocs(empleadosCollection);
    setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const agregarEmpleado = async (e) => {
    e.preventDefault();
    if (!nuevoEmpleado.nombre || !nuevoEmpleado.puesto || !nuevoEmpleado.correo) {
      alert("Completa todos los campos.");
      return;
    }
    await addDoc(empleadosCollection, nuevoEmpleado);
    setNuevoEmpleado({ nombre: "", puesto: "", correo: "" });
    obtenerEmpleados();
  };

  const eliminarEmpleado = async (id) => {
  const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este empleado?");
  if (!confirmacion) return;

  try {
    const empleadoRef = doc(db, "empleados", id);
    await deleteDoc(empleadoRef);
    obtenerEmpleados(); 
  } catch (error) {
    console.error("Error al eliminar el empleado:", error);
    alert("Ocurrió un error al eliminar. Intenta de nuevo.");
  }
};
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista de Empleados</h1>

      <form onSubmit={agregarEmpleado} className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="nombre"
          className="border p-2 w-full"
          value={nuevoEmpleado.nombre}
          onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="puesto"
          className="border p-2 w-full"
          value={nuevoEmpleado.puesto}
          onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, puesto: e.target.value })}
        />
        <input
          type="email"
          placeholder="correo"
          className="border p-2 w-full"
          value={nuevoEmpleado.correo}
          onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, correo: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Agregar Empleado
        </button>
      </form>

      <ul className="space-y-2">
        
  {empleados.map((empleado) => (
    <li key={empleado.id} className="border p-2 rounded flex justify-between items-center">
      <div>
        <strong>{empleado.nombre}</strong> - {empleado.puesto} - {empleado.correo}
      </div>
      <button
        onClick={() => eliminarEmpleado(empleado.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
      >
        Eliminar
      </button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Empleados;
