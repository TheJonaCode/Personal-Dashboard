import { useState, useEffect } from "react";

function Notas() {
  const [nota, setNota] = useState("");
  const [listaNotas, setListaNotas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [notaEditada, setNotaEditada] = useState("");


  // Cargar notas al iniciar
  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];
    console.log("Cargando notas guardadas:", notasGuardadas);
    setListaNotas(notasGuardadas);
  }, []);

  // Guardar notas en localStorage cada vez que cambian
  useEffect(() => {
  if (listaNotas.length > 0) {
    console.log("Guardando notas:", listaNotas);
    localStorage.setItem("notas", JSON.stringify(listaNotas));
  }
}, [listaNotas]);

  const agregarNota = () => {
    if (nota.trim() === "") return;
    setListaNotas([...listaNotas, nota]);
    setNota("");
  };

  const borrarNota = (index) => {
  const nuevasNotas = [...listaNotas];
  nuevasNotas.splice(index, 1);
  setListaNotas(nuevasNotas);
};

const iniciarEdicion = (index, notaActual) => {
  setEditIndex(index);
  setNotaEditada(notaActual);
};

const guardarEdicion = (index) => {
  const nuevasNotas = [...listaNotas];
  nuevasNotas[index] = notaEditada;
  setListaNotas(nuevasNotas);
  setEditIndex(null);
  setNotaEditada("");
};

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Notas Rápidas</h5>
          <p className="card-text">Lleva un resumen de notas importantes para tu semana.</p>
          <input type="text" value={nota} placeholder="Escribe una nota" onChange={(e) => setNota(e.target.value)} className="form-control mt-2"></input>
          <button onClick={agregarNota} type="submit" className=" mt-3 btn btn-primary">Agregar</button>
        </div>
      </div>

      <ul className="list-group">
        <li className=" mt-3 list-group-item active" aria-current="true">Notas Creadas</li>
        {listaNotas.map((n, index) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {editIndex === index ? (
            <>
                <input
                type="text"
                value={notaEditada}
                onChange={(e) => setNotaEditada(e.target.value)}
                className="form-control me-2"
                />
                <button onClick={() => guardarEdicion(index)} className="btn btn-success btn-sm">
                Guardar
                </button>
            </>
            ) : (
            <>
                {n}
                <div>
                <button onClick={() => iniciarEdicion(index, n)} className="btn btn-warning btn-sm me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                    </svg>
                </button>
                <button onClick={() => borrarNota(index)} className="btn btn-danger btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                </button>
                </div>
            </>
            )}
        </li>
        ))}
      </ul>
    </div>
)}


export default Notas;
