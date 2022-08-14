import "../style/Inicio.css";
import Parrafo from "../elements/Parrafo";
import TituloBar from "../elements/TituloBarUy";
import LetrasLiquida from "../elements/LetrasLiquida";
import Modal from "../components/Modal";
import Bienvenido from "../elements/Bienvenido";
import Ancla from "../elements/ButtonAncla";
import { Link } from "react-router-dom";

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
          <Ancla enlace={"#modal-one"} name="Mi Ubicación" />
          <Ancla enlace={"#modal-two"} name="Seleccionar" />
        </div>
        <div>
          <LetrasLiquida />
        </div>
        <Modal
          id="modal-one"
          title="Confirma tu ubicación actual."
          window={true}
        />
        <Modal id="modal-two" title="Seleccione ubicación." window={false} />
      </div>

      <div className="containerInicioFooter">
        <div>
          <Bienvenido />
        </div>
        <Link to="/IngresarBares">Ingresar Bar</Link>
      </div>
    </div>
  );
};

export default Inicio;
