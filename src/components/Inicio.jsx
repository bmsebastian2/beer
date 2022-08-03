import "../style/Inicio.css";
import Parrafo from "../elements/Parrafo";
import TituloBar from "../elements/TituloBarUy";
import LetrasLiquida from "../elements/LetrasLiquida";
import Modal from "../components/Modal";
import Bienvenido from "../elements/Bienvenido";
import Ancla from "../elements/ButtonAncla";

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
          <Ancla enlace={"#modal-one"} name="Mi Ubicaciòn" />
          <Ancla enlace={"#modal-one"} name="Seleccionar" />
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
