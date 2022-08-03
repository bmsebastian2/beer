import '../style/Spinner.css';
import Titulo from './TituloBarUy';

const Spinner = () => {
  return (
    <div className="containerSpinner">
      <span className="loader"></span>   
      <Titulo />
    </div>
  );
};

export default Spinner;
