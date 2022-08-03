import React from "react";

const styled = {
  parrafo: {
    opacity: "85%",
    margin: "0 4.5rem 0 4.5rem",
    textAlign: "center",
  },
  span: {
    color: "#ff3d00",
    margin: "0, 1rem 0 1rem",
  },
};

const Bienvenido = () => {
  const { parrafo, span } = styled;
  return (
    <p style={parrafo}>
      Bienvenido a la <span style={span}> App de bares </span> del Uruguay.
    </p>
  );
};

export default Bienvenido;
