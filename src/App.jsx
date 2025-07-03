import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Notas from "./pages/Notas";
import Clima from "./pages/Clima";
import Dashboard from "./pages/dashboard";
import Configuracion from "./pages/configuracion";
import Tareas from "./pages/Tareas";

function App() {
  return (
    <BrowserRouter>
  <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100%" }}>
    <Header />
    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "1rem", overflowY: "auto" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/clima" element={<Clima />} />
          <Route path="/tareas" element={<Tareas />} />
        </Routes>
      </div>
    </div>
  </div>
</BrowserRouter>
  );
}

export default App;
