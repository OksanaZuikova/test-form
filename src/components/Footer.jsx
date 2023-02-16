import React from "react";
import styled from "styled-components";
import { PinkCartoon } from "./PinkCartoon";
import { YellowCartoon } from "./YellowCartoon";
import { SocialLinks } from "./SocialLinks";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  height: 200px;
  background: #fafafa;
  border: 1px solid #d8d8d8;
  @media (max-width: 500px) {
    height: 150px;
  }
`;

const BlueCartoon = styled.img.attrs({
  src: "images/blue_cartoon.png",
  alt: "emoji",
})`
  position: absolute;
  max-width: 100%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  @media (max-width: 465px) {
    display: none;
  }
`;

export const Footer = () => (
  <Container>
    <PinkCartoon top="-38px" left="15px" />
    <BlueCartoon top="0px" right="127px" />
    <YellowCartoon top="50px" right="-37px" />
    <SocialLinks />
  </Container>
);
