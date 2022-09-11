import styled from "styled-components";

const FontUy = styled.p`
  font-family: Edu VIC WA NT Beginner, cursive;
  font-size: 10vmin;
  color: #ff3d00;
  ::before {
    color: #fff;
    content: ".";
  }
`;
const style = {
  fontFamily: "Edu VIC WA NT Beginner, cursive",
  fontSize: "10vmin",
  color: "#ff3d00",
  "&::before": {
    color: "#fff",
    content: ".",
  },
};
const TextUy = () => {
  return <p style={style}>uy</p>;
};
export default TextUy;
