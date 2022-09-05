import styled from "styled-components";
import barriosMontevideo from "../function/Barrios.js";

const BoxSelect = styled.div`    
    margin: 20px auto 20px auto;      
    overflow: hidden;
    width: 230px;
    position: relative;   
    &::after{
      content: '\025be';
      display: table-cell;
      padding-top: 7px;
      text-align: center;
      width: 40px;
      height: 40px;
      background-color: rgb(29, 38, 48);
      position: absolute;
      top: 0;
      right: 0px;
      pointer-events: none;
    }
`
const SelectCustom = styled.select`
      border: 3px solid #ffffff ;
      border-radius: 25px;
      background: rgb(29, 38, 48);
      font-size: 18px;
      height: 40px;
      padding: 0 0 0 12px;
      width: 250px;
      color: #ffffff;
      &:focus {
      outline: none;
}
`
const Select = () => {
  return (
    <BoxSelect >
      <SelectCustom>
        {barriosMontevideo.map((e, items) => (
          <option key={items}>{e}</option>
        ))}
      </SelectCustom>
    </BoxSelect>
  );
};

export default Select;
