import { useState } from "react";
import axios from "axios";

function Clima() {
  const [ciudad, setCiudad] = useState("");
  const [datosClima, setDatosClima] = useState(null);
  const [error, setError] = useState("");

  const obtenerClima = async () => {
    if (ciudad.trim() === "") return;

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

      const respuesta = await axios.get(url);
      setDatosClima(respuesta.data);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Ciudad no encontrada o error en la consulta");
      setDatosClima(null);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Consulta el Clima</h2>
      <div className="input-group mt-3 mb-3">
        <input type="text" className="form-control" placeholder="Escribe la ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        <button onClick={obtenerClima} className="btn btn-primary"> Buscar </button>
      </div>

      <div className="card text-bg-light mt-3">
      <div className="card-body">
        <h3 className="card-title">Ciudad Ejemplo</h3>
        <p className="card-text">
          <b>Temperatura:</b> 22°C <br />
          <b>Clima:</b> Soleado
        </p>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="Ícono clima"
        />
      </div>
    </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {datosClima && (
        <div className="card mt-3">
          <div className="card-body">
            <h3 className="card-title">{datosClima.name}</h3>
            <p className="card-text">
              Temperatura: {datosClima.main.temp}°C <br />
              Clima: {datosClima.weather[0].description} <br />
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${datosClima.weather[0].icon}@2x.png`}
              alt="Ícono clima"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Clima;
