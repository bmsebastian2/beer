import Button from '../elements/Button';
import Parrafo from '../elements/Parrafo';
import '../style/Inicio.css';
import TituloBar from '../elements/TituloBarUy';
import Modal from '../components/Modal';
import LetrasLiquida from '../elements/LetrasLiquida'


const Inicio = () => {
  return (
    <div className="containerInicio">
      <div className="containerInicioHeader">
        <div className="">
          <TituloBar name='Bar'/>
        </div>
        <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
          <Parrafo name="Buscar bares por:" tamaño="21px" />
          <a href="#modal-one" className="btn btn-big">
            <Button name="Mi ubicación" />
          </a>
          <a href="#modal-one" className="btn btn-big">
            <Button name="Seleccionar" />
          </a>
        </div>
      <LetrasLiquida/>
        <Modal />
      </div>

      <div className="containerInicioFooter">
        <p style={{ opacity: '85%' }}>
          Bienvenido a la{' '}
          <span
            style={{
              color: '#ff3d00',
              margin: '0, 1rem 0 1rem',
            }}
          >
            {' '}
            App de bares{' '}
          </span>{' '}
          del Uruguay.
        </p>
      </div>
    </div>
  );
};

export default Inicio;
