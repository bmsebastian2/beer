import React from "react";
import styled from "styled-components";

const AppBusqueda = () => {
  const Conta = styled.div`
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 320px) {
      background-color: white;
    }
    @media (min-width: 768px) {
      background-color: blue;
    }
    @media (min-width: 1200px) {
      min-height: 90vh;
      min-width: 70%;
    }
  `;
  const Header = styled.div`
    border: 1px solid blue;
    flex: 2;
  `;
  const Body = styled.div`
    border: 1px solid blue;
    flex: 6;
  `;
  const Footer = styled.div`
    border: 1px solid blue;
    flex: 1;
  `;

  return (
    <>
      <Conta>
        <Header />
        <Body />
        <Footer />
      </Conta>
    </>
  );
};

export default AppBusqueda;
