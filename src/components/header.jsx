import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        
        {/* Marca o Título */}
        <Link className="navbar-brand" to="/">Mi Dashboard</Link>

        {/* Botón Hamburguesa */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#menuNavegacion"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="menuNavegacion">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Notas">Notas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Clima">Clima</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Tareas">Tareas</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;
