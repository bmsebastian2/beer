import "../style/Modal.css";
import React from "react";
import Select from "../elements/Select/Select.jsx";
import Button from "../elements/ButtonCustom/Button";
import { Link } from "react-router-dom";
import PostList from "../function/PostList";
import TextCursivaBeginner from "../elements/TextCursivaBeginner";
import IconoSvgGps from "../elements/IconGpsvg/IconoSvgGps";

const Modal = ({ id, title, window }) => {
  return (
    <>
      <a href="#" className="modal" id={id} aria-hidden="true"></a>

      <div className="modal-dialog">
        <div className="modal-header">
          <h2>{title}</h2>
          <a href="#" className="btn-close" aria-hidden="true">
            <span>X</span>
          </a>
        </div>

        <div className="modal-body">
          {window ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconoSvgGps />
                <TextCursivaBeginner name={<PostList />} tamaño="1.7rem" />
              </div>
            </>
          ) : (
            <Select />
          )}
        </div>

        <div
          className="modal-footer"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {window ? (
            <>
              <Link to="/AppBusqueda">
                <Button name="Si" tamaño={"5rem"} />
              </Link>

              <a href="#modal-two" className="btn">
                <Button name="No" tamaño={"5rem"} />
              </a>
            </>
          ) : (
            <>
              <Link to="/AppBusqueda">
                <Button name="Seleccionar" tamaño={"10rem"} />
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
