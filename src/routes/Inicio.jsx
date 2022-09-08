import "../style/Inicio.css";
import TextCursivaBeginner from "../elements/TextCursivaBeginner";
import TextUy from "../elements/groupTextBarUy/TextUy";
import LetrasLiquida from "../elements/LetrasLiquida";
import Modal from "../components/Modal";
import Bienvenido from "../elements/Bienvenido";
import Ancla from "../elements/ButtonAncla";
import { Link } from "react-router-dom";
import LineColor from "../elements/LineColor.styled";

const Inicio = () => {
  return (
    <div className="containerInicio" id="videoElement">
      <div className="containerInicioHeader">
        <div className="containerTituloBar">
          <TextUy />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextCursivaBeginner name="Buscar por:" tamaño="1.7rem" />

          <Ancla enlace={"#modal-one"} name="Mi Ubicación" />
          <Ancla enlace={"#modal-two"} name="Seleccionar" />
        </div>

        <LetrasLiquida />

        <Modal id="modal-one" title="Confirma tu ubicación." window={true} />
        <Modal id="modal-two" title="Seleccione ubicación." window={false} />
      </div>

      <div className="containerInicioFooter">
        <div>
          <Bienvenido />
        </div>

        <LineColor />

        <Link to="/IngresarBares">Ingresar Bar</Link>
      </div>
    </div>
  );
};

export default Inicio;
