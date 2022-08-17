import React from "react";
import { forwardRef } from "react";

const ButtonMenu = forwardRef(
  ({ id, d1, d2, d3, color, active, clickItem }, ref) => {
    return (
      <button
        ref={ref}
        onClick={() => clickItem(id)}
        className={"menu__item " + active}
        style={{ "--bgColorItem": `${color}` }}
      >
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
