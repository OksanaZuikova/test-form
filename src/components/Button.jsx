import React from "react";
import styled, { css } from "styled-components";

const StyleButton = styled.button`
  border-radius: 500px;
  padding: 27px 0;
  margin-top: 23px;
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

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: #fad34f;
    `};
`;

export const Button = () => <StyleButton>Send message</StyleButton>;
