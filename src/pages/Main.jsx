import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Apercu Arabic Pro", sans-serif;
  font-size: 40px;
  font-weight: 400; 
  Line height 52px;
  color: #3E3E3E;
`;

const Container = styled.div`
  margin: 179px 147px;
  position: absolute;
  top: 0px;
  left: 0px;
`;
export const Main = () => (
  <Container>
    <Title>Reach out to us!</Title>
  </Container>
);
