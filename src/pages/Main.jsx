import React from "react";
import styled from "styled-components";
import { Form } from "../components/Form";
import { Footer } from "../components/Footer";

const Container = styled.div`
margin: 0;
padding: 0;`;

export const Main = () => (
  <Container>
    <Form />
    <Footer />
  </Container>
);
