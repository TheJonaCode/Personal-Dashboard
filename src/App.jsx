import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

import Notas from "./pages/Notas";
import Clima from "./pages/Clima";
import Dashboard from "./pages/dashboard";
import Configuracion from "./pages/configuracion";
import Tareas from "./pages/Tareas";

function App() {
  return (
    <BrowserRouter>
<div className="container-fluid p-0 min-vh-100 d-flex flex-column">
    <Header />
      <main className="flex-grow-1 d-flex justify-content-center align-items-start p-3">
    <div className="w-100" style={{ maxWidth: "800px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/clima" element={<Clima />} />
          <Route path="/tareas" element={<Tareas />} />
        </Routes>
    </div>
    </main>
  </div>
</BrowserRouter>
  );
}

export default App;