import React from "react";
import styled from "styled-components";
import { YellowCartoon } from "./YellowCartoon";
import { PinkCartoon } from "./PinkCartoon";

const Container = styled.div`
  max-width: 100%;
  height: 1128px;
  position: relative;
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
`;

const YellowCartoon2 = styled.img.attrs({
  src: "images/yellow_cartoon2.png",
  alt: "emoji",
})`
  position: absolute;
  max-width: 100%;
  z-index: 1;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
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
  bottom: ${(props) => props.bottom};
`;

export const Background = () => (
  <Container>
    <Clouds />
    <Map />
    <YellowCartoon top="23px" left="29px" />
    <YellowCartoon2 top="516px" right="550px" />
    <PinkCartoon top="558px" right="380px" />
    <Ellipse top="21px" right="639px" />
  </Container>
);
