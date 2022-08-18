import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";

const AppBusqueda = () => {
  const Conta = styled.div`
    min-height: 90vh;
    width: 70%;
    overflow: hidden;
    opacity: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 320px) {
    }
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 1200px) {
    }
  `;
  const Header = styled.div`
    flex: 2;
    background: linear-gradient(220.55deg, #565656 0%, #181818 100%);

    @media (min-width: 1200px) {
      border-top-left-radius: 3rem;
      border-top-right-radius: 3rem;
    }
  `;
  const Body = styled.div`
    flex: 6;
    background: white;
  `;

  const Footer = styled.div`
    flex: 1;
    background: white;

    @media (min-width: 1200px) {
    }
  `;

  return (
    <>
      <Conta>
        <Header />
        <Body />
        <Footer>
          <Menu />
        </Footer>
      </Conta>
    </>
  );
};

export default AppBusqueda;
