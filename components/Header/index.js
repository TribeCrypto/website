import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import { Link } from "react-scroll";
import Button from "../Button";
import Icons from "../Icons";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 550px;
  margin: 80px 0 0 0;
  background: ${theme.background.main};
  width: 100%;
`;

Wrapper.Background = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  bottom: 0;
`;

const Tribe = styled.p`
  z-index: 20;
  font-size: 4rem;
  color: #fff;
  font-weight: 100;
  letter-spacing: 15px;
  margin: 85px 0 65px 0;
`;

const Subline = styled.p`
  z-index: 20;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 100;
  letter-spacing: 5px;
  margin: 0;
`;

const Bracket = styled.span`
  z-index: 20;
  font-size: 2.2rem;
`;

Button.Container = styled.div`
  z-index: 20;
  width: 220px;
  margin: 50px 0 0 0;
`;

export default () => (
  <Wrapper>
    <Wrapper.Background>
      <Icons.Header />
    </Wrapper.Background>
    <Tribe>TRIBE</Tribe>
    <Subline>
      <Bracket>[</Bracket> COMMUNITY BUILT PRIVACY CRYPTO FOR MASS ADOPTION{" "}
      <Bracket>]</Bracket>
    </Subline>
    <Button.Container>
      <Link to="wallet" spy={true} smooth={true} duration={500} offset={-80}>
        <Button>GET TRIBE WALLET</Button>
      </Link>
    </Button.Container>
  </Wrapper>
);
