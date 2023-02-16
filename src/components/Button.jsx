import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 500px;
  padding: 27px 0;
  margin-top: 15px;
  width: 218px;
  height: 73px;
  background: #fad34f;
  color: white;
  border: 2px solid #fad34f;
  font-family: "Apercu Arabic Pro", sans-serif;
  line-height: 18px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    color: #fad34f;
    background: white;
  }
  @media (max-width: 850px) {
    display: block;
    margin: 15px auto;
  }
`;

export const Button = () => (
  <StyledButton type="submit">Send message</StyledButton>
);
