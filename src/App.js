import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Contenido } from "./components/contenido/Contenido";
import { Inicio } from "./components/inicio/Inicio";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/simulador/:hash" element={<Contenido />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
