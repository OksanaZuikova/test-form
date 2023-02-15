import React from "react";
import styled from "styled-components";

const StyledYellowCartoon = styled.img.attrs({
  src: "images/yellow_cartoon.png",
  alt: "emoji",
})`
  position: absolute;
  max-width: 100%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

export const YellowCartoon = (props) => (
  <StyledYellowCartoon
    bottom={props.bottom}
    top={props.top}
    right={props.right}
    left={props.left}
  />
);
