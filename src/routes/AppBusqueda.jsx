import React from "react";

import styled from "styled-components";
import Menu from "../components/Menu";

import LineColor from "../elements/LineColor";
import TextGroupBarUy from "../elements/groupTextBarUy/TextGroupBarUy";

import Lupa from "../assets/magnifier.png";
import Gps from "../assets/gps.png";
import Lupulo from "../assets/Loop.png";

const ContainerAppBusqueda = styled.div`
  height: 90vh;
  width: 60%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #fff;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Header = styled.div`
  flex: 2;
  background-color: #1d1d27;
  display: grid;
  grid-template-columns: "1fr 1fr";
  padding: 1rem 3rem 1rem 3rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (min-width: 1200px) {
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
  }
`;
const HeaderIconos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
`;
const HeaderBuscar = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: end;
  margin-top: 2.5rem;
`;
const Ancla = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: 3rem;
  width: 100%;
  font-size: 1em;
  background-color: #fd683d;
  color: rgb(29, 38, 48);
  border-style: solid;
  border-radius: 13px;
  box-shadow: -1px -2px 5px rgba(66, 66, 66, 0.36);

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Body = styled.div`
  flex: 6;
  background: #ffff;
  overflow-y: scroll;
  padding: 0.5rem;
`;

const Footer = styled.div`
  flex: 1;
  background: white;
`;

// const Small = styled.div`
//   position: absolute;
//   top:8rem;
//   left:16rem;

//    @media (max-width: 768px) {
//     top:3.9rem;
//     left:-2rem;
//   }

// `
const ImgLupulo = styled.img`
  height: 20vh;
  width: 10vw;
  opacity: 60%;

  @media (max-width: 768px) {
    height: 10vh;
    width: 20vw;
  }
`;
const AppBusqueda = () => {
  return (
    <>
      <ContainerAppBusqueda>
        <Header>
          <HeaderIconos>
            <div>
              <ImgLupulo src={Lupulo} />
            </div>
            <div>
              <TextGroupBarUy />
            </div>
          </HeaderIconos>

          <HeaderBuscar>
            <Ancla href="#modal-tree">
              <div>
                <img
                  src={Lupa}
                  alt=""
                  width="40"
                  height="34"
                  style={{ opacity: "50%" }}
                />
              </div>

              <p
                style={{ minWidth: "75%", opacity: "70%", fontSize: "0.9rem" }}
              >
                Seleccione ubicación..
              </p>

              <div>
                <img
                  src={Gps}
                  alt=""
                  width="40"
                  height="34"
                  style={{ opacity: "50%" }}
                />
              </div>
            </Ancla>
          </HeaderBuscar>
        </Header>

        <LineColor />
        <Body></Body>

        <Footer>
          <Menu />
        </Footer>
      </ContainerAppBusqueda>
    </>
  );
};

export default AppBusqueda;
