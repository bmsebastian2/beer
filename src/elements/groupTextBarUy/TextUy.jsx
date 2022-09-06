import styled from "styled-components";

const FontUy = styled.p`
    /* border:1px solid pink; */
    /* transform: rotate(-25deg);    */
    font-family: Edu VIC WA NT Beginner, cursive;
    font-size: 10vmin;  
    color: #ff3d00;     
    ::before{
      color:#fff;
      content: '.';
    }
`
const TextUy = () => <FontUy>uy</FontUy>

export default TextUy;
