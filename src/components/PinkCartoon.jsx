import React from "react";
import styled from "styled-components";

const StyledPinkCartoon = styled.img.attrs({
  src: "images/pink_cartoon.png",
  alt: "emoji",
})`
  position: absolute;
  max-width: 100%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

export const PinkCartoon = (props) => (
  <StyledPinkCartoon
    bottom={props.bottom}
    top={props.top}
    right={props.right}
    left={props.left}
  />
);
