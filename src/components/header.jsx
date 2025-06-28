function Header() {
  return (
    <nav class="bg-light navbar navbar-expand-lg border-bottom border-body">
      <div class="container-fluid d-flex justify-content-center">
          <div class="navbar-nav d-flex justify-content-center">
            <a class="nav-link active" aria-current="page" href="#">
              Notas
            </a>
            <a class="mx-5 nav-link active" aria-current="page" href="#">
              Clima
            </a>
            <a class="nav-link active" aria-current="page" href="#">
              Tareas
            </a>
          </div>
      </div>
      <a class="navbar-brand" href="https://github.com/TheJonaCode/Personal-Dashboard">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
    </nav>
  );
}

export default Header;
