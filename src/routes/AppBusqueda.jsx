import React from "react";
import styled from "styled-components";
import Menu from '../components/Menu'

const AppBusqueda = () => {
  const Conta = styled.div`
    min-height: 100vh;
    min-width: 100%;
    overflow: hidden;
  
   opacity: 100%;
  
    display: flex;
    flex-direction: column;

    @media (min-width: 320px) {

    }
    @media (min-width: 768px) {
     
    }
    @media (min-width: 1200px) {
      min-height: 90vh;
      min-width: 70%;
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
      background: rgb(247,247,250);
      background: linear-gradient(3deg, rgba(247,247,250,1) 0%, rgba(255,255,255,1) 26%);
  `;

  const Footer = styled.div`
      flex: 1;    
      background: white;
      background-color: #FFFFFF;
    

     @media (min-width: 1200px) {
      border-bottom-left-radius: 3rem;
      border-bottom-right-radius: 3rem;
    }
  `;

  return (
    <>
      <Conta>
        <Header />
        <Body />
        <Footer>
          <Menu/>
        </Footer>
      </Conta>
    </>
  );
};

export default AppBusqueda;
