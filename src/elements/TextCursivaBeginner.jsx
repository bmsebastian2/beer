import styled from "styled-components";

const Parrafo = styled.p`
    font-family: Edu VIC WA NT Beginner, cursive;
    font-style: italic;
    font-weight: 400;
    font-size: ${props =>props.tamaño};
    text-align: center;
    margin: 0.5rem;
    color: ${props => props.color? props.color:"#fff"};
  
`
const TextCursivaBeginner = ({ name, tamaño, color }) =>  <Parrafo tamaño={tamaño} color={color}>{name}</Parrafo>

export default TextCursivaBeginner;
