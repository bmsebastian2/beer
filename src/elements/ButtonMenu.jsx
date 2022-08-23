import React from "react";
import { forwardRef } from "react";

const ButtonMenu = forwardRef(
  ({ id, d1, d2, d3, color, active, clickItem, text }, ref) => {
    return (
      <button
        ref={ref}
        onClick={() => clickItem(id)}
        className={"menu__item " + active}
        style={{ "--bgColorItem": `${color}`, display:'flex', flexDirection:'column'}}
        title={text}
      >
             <p style={{color:active? '#fff':color}}>{text}</p>
        <svg className="icon" viewBox="0 0 24 24">
          <path d={d1} />
          <path d={d2} />
          <path d={d3} />
        </svg>
   
      </button>
    );
  }
);

export default ButtonMenu;
