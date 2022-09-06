import styled from "styled-components"
import TextShadown from "./TextShadown"
import TextUy from "./TextUy"
import TextNeon from './TextNeon'
import imagen  from '../../assets/Loop.png'

const ContainerMain = styled.div`
    text-align:end;
    display:flex;
    flex-direction:column; 
    align-items:center;
    position:relative;
    
`
const ContainerSon = styled.div`
    display:flex;
    align-items:end;
   
`


const Imagen = styled.img`
    width: 3vw;
    height: 3vw;
    position: absolute;
    left:3.3vw;
    top:5rem;
    opacity: 30%;
    transform: rotate(90deg);
     @media (max-width: 768px) {
         width: 10vw;
         height: 10vw; 
         left:7vw;     
          top:2rem;
        }  
`
const Imagen2 = styled.img`
    width: 3vw;
    height: 3vw;
    position: absolute;
    right:6vw;
    bottom:7rem;
    opacity: 30%;
    transform: rotate(-65deg);
     @media (max-width: 768px) {
          width: 10vw;
          height: 10vw;          
          left:52vw;
          top: -1rem;
          transform: rotate(-80deg);      
        }  
`

const TextGroupBarUy = () => {
    return(
        <ContainerMain>
            <ContainerSon>
                <Imagen src={imagen}/>
                 <TextShadown/>
                 <TextUy/> 
                  <Imagen2 src={imagen}/>
            </ContainerSon>
         
                <TextNeon/>
        </ContainerMain>
    )
}


export default TextGroupBarUy