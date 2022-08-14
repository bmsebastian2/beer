import { useState } from "react";
import React from "react";
import "./App.css";
import Inicio from "./components/Inicio.jsx";
import WindowsLoader from "./components/WindowsLoader";
import { Routes, Route } from "react-router-dom";
import AppBusqueda from "./routes/AppBusqueda";
import IngresarBares from "./routes/IngresarBares";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WindowsLoader WindowOpen={<Inicio />} />} />
        <Route path="IngresarBares" element={IngresarBares} />
        <Route path="AppBusqueda" element={AppBusqueda} />
      </Routes>
    </div>
  );
}

export default App;
