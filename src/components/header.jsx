function Header() {
  return (
    <nav className="bg-light navbar navbar-expand-lg border-bottom border-body">
      <div className="container-fluid d-flex justify-content-center">
          <div className="navbar-nav d-flex justify-content-center">
            <a className="nav-link active" aria-current="page" href="/Notas">
              Notas
            </a>
            <a className="mx-5 nav-link active" aria-current="page" href="/Clima">
              Clima
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Tareas
            </a>
          </div>
      </div>
      <a className="navbar-brand" target="_blank" href="https://github.com/TheJonaCode/Personal-Dashboard">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </a>
    </nav>
  );
}

export default Header;
