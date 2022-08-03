import "../style/Inicio.css";
import Button from "../elements/Button";
import Parrafo from "../elements/Parrafo";
import TituloBar from "../elements/TituloBarUy";
import LetrasLiquida from "../elements/LetrasLiquida";
import Modal from "../components/Modal";
import Bienvenido from "../elements/Bienvenido";

const Inicio = () => {
  return (
    <div className="containerInicio">
      <div className="containerInicioHeader">
        <div className="containerTituloBar">
          <TituloBar />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Parrafo name="Buscar bares por:" tamaño="21px" />
          <a href="#modal-one">
            <Button name="Mi ubicación"></Button>
          </a>

          <a href="#modal-one">
            <Button name="Seleccionar" />
          </a>
        </div>

        <div>
          <LetrasLiquida />
        </div>

        <Modal />
      </div>

      <div className="containerInicioFooter">
        <div>
          <Bienvenido />
        </div>
        <a href="#">Menu</a>
      </div>
    </div>
  );
};

export default Inicio;
