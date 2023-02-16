import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Title = styled.h1`
  font-family: "Apercu Arabic Pro", sans-serif;
  font-size: 40px;
  font-weight: 400; 
  line-height 52px;
  color: #3E3E3E;
  margin-top: 0;
    @media (max-width: 850px) {
    text-align: center;
    font-size: 30px;
    }
`;

const Container = styled.div`
  margin: 179px 147px;
  position: absolute;
  top: 0px;
  left: 0px;
  @media (max-width: 725px) {
    margin-left: 70px;
  }
  @media (max-width: 360px) {
    margin-left: 60px;
  }
`;

const StyledInput = styled.input`
  display: block;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding-left: 46px;
  margin-bottom: 8px;
  color: #2d2d2d;
  font-family: "Apercu Arabic Pro", sans-serif;
  line-height: 32.4px;
  font-size: 18px;
  font-weight: 400;
  width: 511px;
  height: 93px;
  padding-bottom: ${(props) => props.padding};
  @media (max-width: 850px) {
    width: 400px;
  }
  @media (max-width: 725px) {
    width: 300px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 180px;
  }
`;

export const Form = () => (
  <Container>
    <Title>Reach out to us!</Title>
    <form>
      <StyledInput defaultValue="Your name*" type="text" />
      <StyledInput defaultValue="Your e-mail*" type="email" />
      <StyledInput defaultValue="Your message*" type="text" padding="96px" />
      <Button />
    </form>
  </Container>
);
