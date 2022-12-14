import styled from "styled-components";

const LineC = styled.div`
  text-align: center;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    0.25turn,
    rgba(255, 249, 34),
    rgba(255, 0, 128),
    rgba(56, 2, 155, 0)
  );
  border-image-slice: 1;
  width: 100%;
`;

const LineColor = () => {
  return <LineC></LineC>;
};

export default LineColor;
