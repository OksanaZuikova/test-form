import React from "react";
import styled from "styled-components";

const SocialLink = styled.img``;

const Container = styled.div`
  margin: 80px 0 0 343px;
  @media (max-width: 725px) {
    margin-left: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 65px;
  }
`;

const Link = styled.a`
  margin-right: 26px;
`;

export const SocialLinks = () => (
  <Container>
    <Link href="#">
      <SocialLink src="images/linkedin_icon.png" alt="linkedin-icon" />
    </Link>
    <Link href="#">
      <SocialLink src="images/twitter_icon.png" alt="twitter-icon" />
    </Link>
    <Link href="#">
      <SocialLink src="images/facebook_icon.png" alt="facebook-icon" />
    </Link>
    <Link href="#">
      <SocialLink src="images/pinterest_icon.png" alt="pinterest-icon" />
    </Link>
  </Container>
);
