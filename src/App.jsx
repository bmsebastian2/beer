import { useState } from "react";
import React from "react";
import "./App.css";
import Inicio from "./components/Inicio.jsx";
import WindowsLoader from "./components/WindowsLoader";

function App() {
  return (
    <div className="App">
      <WindowsLoader WindowOpen={<Inicio />} />
    </div>
  );
}

export default App;
