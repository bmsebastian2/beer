import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import TituloBar from "../elements/TituloBarUy";


const AppBusqueda = () => {
  const Conta = styled.div`
    min-height: 90vh;
    width: 70%;
    overflow: hidden;
    opacity: 100%;
    display: flex;
    flex-direction: column;
    color:#fff;

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
    /* background: linear-gradient(220.55deg, #565656 0%, #181818 100%); */
    background-color:#1d1d27;
    display:grid;    
    grid-template-columns:'1fr 1fr';
    padding:1rem 3rem 1rem 3rem;
    // border:1px solid blue;
    

    @media (min-width: 1200px) {
      border-top-left-radius: 3rem;
      border-top-right-radius: 3rem;
    }
  `;
  const HeaderIconos = styled.div`
   display:grid;
   grid-template-columns:2fr 1fr;
  //  border:1px solid yellow;
   align-items: end;
   

  `
  const HeaderBuscar = styled.div`
   display:grid;  
   min-height: 100%;
    align-items: end;
   margin-top:1rem;
    /* border:1px solid red; */
   padding-bottom: 0.5rem;
  

   `
   const H3 =  styled.h3`
   font-family: Edu VIC WA NT Beginner, cursive;
     font-size: 6vmin;
   `

  const Ancla = styled.a`
      padding: 7px;
     font-size: 19px;
     border-width: 0px;
     border-color: #ffffff;
     background-color: #fd683d;
     max-height:3rem;
     color: rgb(29, 38, 48);;
     border-style: solid;
     border-radius: 13px;
     box-shadow: -1px -2px 5px rgba(66,66,66,.36);      
  
  `
  
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
        <Header>

          <HeaderIconos>
            <div className="" style={{display:'flex', alignItems:'center'}}>
              <H3>Bares de Montevideo.</H3>
            </div>
            <div className="" style={{display:'flex', alignItems:'center', justifyContent:'end'}}>
            <TituloBar/>
            </div>

          </HeaderIconos>

          <HeaderBuscar>
            <Ancla href="#modal-tree" >Ingrese</Ancla>
          </HeaderBuscar>
            <Modal id="modal-tree" title="Seleccione ubicación." window={false} />
        </Header>
        <Body />
        <Footer>
          <Menu />
        </Footer>
      </Conta>
    </>
  );
};

export default AppBusqueda;
