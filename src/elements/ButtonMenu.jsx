import React from "react";

const ButtonMenu = ({id,d1,d2,d3,color,active, clickItem}) => {
   
    return (
    
    <button  onClick={(e)=>clickItem(e,id)} className={'menu__item ' + active}  style={{"--bgColorItem":`${color}`}}>
      <svg className="icon" viewBox="0 0 24 24" >
        <path d={d1} />
        <path d={d2}  />
        <path d={d3}  />
      </svg>
    </button>

    )
}

export default ButtonMenu