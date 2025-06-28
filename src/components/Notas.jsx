import { useState, useEffect } from "react";

function Notas() {
  const [nota, setNota] = useState("");
  const [listaNotas, setListaNotas] = useState([]);

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
          <li className="list-group-item" key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notas;
