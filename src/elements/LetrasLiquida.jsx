import "../style/LetrasLiquida.css";
import Uy from "../elements/TituloBarUy";

const LetrasLiquida = () => {
  const json = {
    liqui: {
      letterSpacing: "0.2vmin",
    },
    liqui_h1: {
      fontFamily: "Edu VIC WA NT Beginner, cursive",
      fontSize: "18vmin",
      position: "absolute",
      top: "1rem",
      left: "45vw",
    },
    uno: {
      fontSize: "17.9vmin !important",
    },
    wave: {
      color: "blue",
      animation: "wave 3s ease-in-out infinite",
    },
  };

  return (
    <>
      <div className="liqui">
        <h1 className="border uno">Bares</h1>
        <h1 className="wave dos">Bares</h1>
        <Uy />
      </div>
    </>
  );
};

export default LetrasLiquida;
