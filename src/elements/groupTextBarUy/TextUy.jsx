import styled from "styled-components";

const FontUy = styled.p`
    font-family: Edu VIC WA NT Beginner, cursive;
    font-size: 14vmin;  
    color: #ff3d00;     
    ::before{
      color:#fff;
      content: '.';
    }
`
const TextUy = () => <FontUy>uy</FontUy>

export default TextUy;
