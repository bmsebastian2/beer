import "../style/Modal.css";
import React from "react";
import Select from "../elements/Select.jsx";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const Modal = ({ id, title, window, link }) => {
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
            <p>
              Su Ubicación es barrio: <span> Cordon </span>
            </p>
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
                <Button name="Si" />
              </Link>

              <a href="#modal-two" className="btn">
                <Button name="No" />
              </a>
            </>
          ) : (
            <>
              <Link to="/AppBusqueda">
                <Button name="Seleccionar" />
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
