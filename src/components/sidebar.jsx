import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="bg-light p-3" style={{ width: "200px", minHeight: "100%" }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/configuracion">
            Configuración
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
