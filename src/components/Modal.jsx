import '../style/Modal.css';
import React from 'react';
import Select from '../elements/Select.jsx';

const Modal = () => {
  return (
    <>
      {/* Modal */}
      <a href="#" className="modal" id="modal-one" aria-hidden="true"></a>
      <div className="modal-dialog">
        <div className="modal-header">
          <h2>Confirma tu ubicación actual:</h2>
          <a href="#" className="btn-close" aria-hidden="true">
            <span>X</span>
          </a>
        </div>
        <div className="modal-body">
          <p>
            Su Ubicación es barrio: <span> Cordon </span>{' '}
          </p>
        </div>
        <div className="modal-footer">
          <a href="#" className="btn">
            <span>Sí</span>
          </a>

          <a className="btn">
            <span>No</span>
          </a>
        </div>
        <Select />
      </div>

      {/* /Modal */}
    </>
  );
};

export default Modal;
