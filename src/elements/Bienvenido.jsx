import React from "react";
import styled from "styled-components";

const Parrafo = styled.p`
  opacity: 60%;
  text-align: center;

  font-size: 0.8rem;
  @media (max-width: 768px) {
    margin-top: -1.7rem;
  }
`;

const Bienvenido = () => {
  return <Parrafo>Bienvenido a la App de bares del Uruguay.</Parrafo>;
};

export default Bienvenido;
