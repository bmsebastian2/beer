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

const TextUy = () => {
  return (
    <>
      <FontUy>uy</FontUy>
    </>
  );
};
export default TextUy;
