import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import TituloBar from "../elements/TituloBarUy";
import Lupa from '../assets/magnifier.png'
import Gps from '../assets/gps.png'
import TextShadown from "../elements/TextShadown";
import LineColor from '../elements/LineColor'
import TextNeon from "../elements/TextNeon";


const AppBusqueda = () => {
  
  const ContainerAppBusqueda = styled.div`
  
    height: 90vh;
    width: 60%;
    overflow: hidden;   
    display: flex;
    flex-direction: column;
    color:#fff;
    /* @media (min-width: 320px) {
    } */
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
   
  `;

  const Header = styled.div`
  /* border:1px solid yellow; */
    flex: 2;
    /* background: linear-gradient(220.55deg, #565656 0%, #181818 100%); */
    background-color:#1d1d27;
    display:grid;    
    grid-template-columns:'1fr 1fr';
    padding:1rem 3rem 1rem 3rem;
    // border:1px solid blue;
    
     @media (max-width: 768px) {
      padding: 1rem;
    } 
    @media (min-width: 1200px) {
      border-top-left-radius: 3rem;
      border-top-right-radius: 3rem;
    }
  `;
  const HeaderIconos = styled.div`
   display:grid;
   grid-template-columns:1fr 1fr;
   /* border:1px solid blue; */
   align-items: end;
   

  `
  const HeaderBuscar = styled.div`
    /* border:3px solid red; */
    height: 3rem;
    width:100% ;
    display:flex;
    align-items: end;
    margin-top:2.5rem;  
   
    
     @media (max-width: 768px) {
   
      
    }    

   `
   const Ancla = styled.a`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 1rem;
     height:3rem;
     width:100%;    
     font-size: 1em;        
     background-color: #fd683d;
     color: rgb(29, 38, 48);;
     border-style: solid;
     border-radius: 13px;
     box-shadow: -1px -2px 5px rgba(66,66,66,.36);  
     
     @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }    
  
  `
  //  const H3 =  styled.h3`
  //  font-family: Edu VIC WA NT Beginner, cursive;
  //    font-size: 4.5vmin;
  //  `

  
  
  const Body = styled.div`
    flex: 6;
    background: #ffff;
    overflow-y: scroll;
    padding: 0.5rem;
  `;

  const Footer = styled.div`
    flex: 1;
    background: white;

    @media (min-width: 1200px) {
    }
  `;

  const Small = styled.div`
    position: absolute;
    top:8rem;
    left:16rem;
      
     @media (max-width: 768px) {
      top:3.9rem;
      left:-2rem;
    } 

  `


  return (
    <>
      <ContainerAppBusqueda>
        <Header>

          <HeaderIconos>
            
            <div>
              {/* <H3>Bares de Montevideo.</H3> */}
              {/* <TextNeon/> */}
            </div>

            <div className="" style={{textAlign:'end', display:'flex', alignItems:'center',  position:'relative'}}>
            <TextShadown/>          
            <TituloBar/>
            <Small>           
                <TextNeon/>
            </Small>
            </div>

          </HeaderIconos>

          <HeaderBuscar>
            <Ancla href="#modal-tree" >
              <div className=""><img src={Lupa} alt=""width="40" height="34" style={{opacity:'50%'}}/></div>              
              <p style={{minWidth:'75%', opacity:'70%', fontSize:'0.9rem'}}>Seleccione ubicación..</p>              
              <div className=""><img src={Gps} alt=""width="40" height="34" style={{opacity:'50%' }}/></div>  

            </Ancla>
          </HeaderBuscar>
        </Header>
        
        <LineColor></LineColor>
        <Body>
            <div class="card m-3">
  <div class="card-header">            
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card m-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card m-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card m-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            <div class="card m-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card m-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card m-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card m-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </Body>


        <Footer>
          <Menu />
        </Footer>
      </ContainerAppBusqueda>
    </>
  );
};

export default AppBusqueda;
