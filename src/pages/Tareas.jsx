import { useState, useEffect } from "react";

function Tareas() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  // Cargar tareas guardadas
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setListaTareas(tareasGuardadas);
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(listaTareas));
  }, [listaTareas]);

  const agregarTarea = () => {
    if (tarea.trim() === "") return;
    const nuevaTarea = { texto: tarea, completada: false };
    setListaTareas([...listaTareas, nuevaTarea]);
    setTarea("");
  };

  const completarTarea = (index) => {
    const nuevasTareas = [...listaTareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setListaTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...listaTareas];
    nuevasTareas.splice(index, 1);
    setListaTareas(nuevasTareas);
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Tareas</h2>

      <div className="input-group mb-3 mt-4">
        <input type="text" className="form-control" placeholder="Escribe una tarea" value={tarea} onChange={(e) => setTarea(e.target.value)} />
        <button onClick={agregarTarea} className="btn btn-primary"> Agregar </button>
      </div>

      <ul className="list-group">
        {listaTareas.map((t, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              t.completada ? "list-group-item-success text-decoration-line-through" : ""
            }`}
          >
            {t.texto}
            <div>
              <button onClick={() => completarTarea(index)} className="btn btn-sm btn-success me-2">
                {t.completada ? "Desmarcar" : "Completar"}
              </button>
              <button onClick={() => eliminarTarea(index)} className="btn btn-sm btn-danger">
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;