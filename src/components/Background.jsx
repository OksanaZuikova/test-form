import React from "react";
import styled from "styled-components";
import { YellowCartoon } from "./YellowCartoon";
import { PinkCartoon } from "./PinkCartoon";

const Container = styled.div`
  max-width: 1440px;
  height: 928px;
  position: relative;
  margin: 0 auto;
  @media (max-width: 725px) {
    height: 800px;
  }
  @media (max-width: 500px) {
    height: 700px;
  }
`;

const Clouds = styled.img.attrs({
  src: "images/cloud.png",
  alt: "clouds",
})`
  position: absolute;
  max-width: 100%;
  top: 100px;
  left: 0;
`;

const Map = styled.img.attrs({
  src: "images/map.png",
  alt: "map",
})`
  position: absolute;
  top: 0px;
  right: 0px;
  @media (max-width: 725px) {
    opacity: 0.7;
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 400px;
  }
`;

const YellowCartoon2 = styled.img.attrs({
  src: "images/yellow_cartoon2.png",
  alt: "emoji",
})`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  @media (max-width: 725px) {
    display: none;
  }
`;

const Ellipse = styled.img.attrs({
  src: "images/ellipse.png",
  alt: "ellipse",
})`
  position: absolute;
  max-width: 100%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

export const Background = () => (
  <Container>
    <Clouds />
    <Map />
    <YellowCartoon top="23px" left="29px" />
    <PinkCartoon top="558px" right="380px" />
    <YellowCartoon2 top="516px" right="550px" />
    <Ellipse top="21px" right="639px" />
  </Container>
);
