import React from "react";
import styled from "styled-components";

const ContainerMain = styled.div`
  min-height: 100vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;

`
const ContainerMenu = styled.div`
  height: 50vh;
  width: 20%;
background: linear-gradient(220.55deg, #FFF6EB 0%, #DFD1C5 100%);
  border-radius: 1.5rem;  
`


const IngresarBares = () => {
  return (
  <ContainerMain>

    <ContainerMenu>

    </ContainerMenu>

  </ContainerMain>
  )
};

export default IngresarBares;
