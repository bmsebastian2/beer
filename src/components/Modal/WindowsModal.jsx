import IconoSvgGps from "../../elements/IconGpsvg/IconoSvgGps";
import TextCursivaBeginner from "../../elements/TextCursivaBeginner";
import PostList from "../../function/PostList";
import Select from "../../elements/Select/Select";
import Button from "../../elements/ButtonCustom/Button";
import { Link } from "react-router-dom";
import ContainerModal from "./ContainerModal";
import "./Modal.css";
const WindowsModal = () => {
  return (
    <>
      <ContainerModal id="modal-one" title="Confirma tu ubicación.">
        <div className="modal-body">
          <IconoSvgGps />
          <TextCursivaBeginner name={<PostList />} tamaño="1.7rem" />
        </div>
        <div className="modal-footer">
          <Link to="/AppBusqueda">
            <Button name="Si" tamaño={"5rem"} />
          </Link>
          <a href="#modal-two" className="btn">
            <Button name="No" tamaño={"5rem"} />
          </a>
        </div>
      </ContainerModal>

      <ContainerModal id="modal-two" title="Seleccione ubicación.">
        <div className="modal-body">
          <Select />
        </div>
        <div className="modal-footer">
          <Link to="/AppBusqueda">
            <Button name="Seleccionar" tamaño={"10rem"} />
          </Link>
        </div>
      </ContainerModal>
    </>
  );
};

export default WindowsModal;
