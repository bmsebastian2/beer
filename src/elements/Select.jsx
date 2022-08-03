import "../style/Select.css";
import barriosMontevideo from "../function/Barrios.js";

const Select = () => {
  return (
    <div className="caja">
      <select>
        {barriosMontevideo.map((e, items) => (
          <option key={items}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
