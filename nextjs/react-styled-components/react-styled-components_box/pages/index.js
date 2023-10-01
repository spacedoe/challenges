import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents, { StyledBox } from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

const Container = styled.div`
display: flex;
`

export default function HomePage() {
  return (
    <Container>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox/>
      <StyledBox $isBlack={true}/>
    </Container>
  );
}
