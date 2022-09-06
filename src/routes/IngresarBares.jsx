import React from "react";
import styled from "styled-components";



const ContainerMain = styled.div`

  min-height: 100vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(140deg, rgb(219, 98, 65) 0%, rgb(229, 91, 141) 100%);

`
const ContainerMenu = styled.div`
  background:  #27282d;
  height: 50vh;
  width: 20%;
  border-radius: 1.5rem;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 4px 30px -5px rgba(0,0,0,0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center  ;
`

const Input = styled.input`
  box-sizing: border-box;
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid lighten(#27282d, 25%);
  color:  lighten(#27282d, 65%);
  padding: 12px 6px 12px 36px;
  font-size: 19px;
  outline: none;
  caret-color: rgb(229, 91, 141);
  font-family: 'Dosis', sans-serif;
  letter-spacing: 1.3px;

  :focus{
     border-bottom: 1px solid transparent;
  border-image: linear-gradient(140deg, rgb(219, 98, 65) 0%, rgb(229, 91, 141) 100%);
  border-image-slice: 1;
  color:  lighten(#27282d, 65%);
  }
  ::placeholder{
    position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  transition: color .3s;

  }
`


const IngresarBares = () => {
  return (
  <ContainerMain>

    <ContainerMenu>
      <Input/>

    </ContainerMenu>

  </ContainerMain>
  )
};

export default IngresarBares;
