import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import Color from "color";
import { Link } from "react-scroll";
import Logo from "../Logo";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  height: 80px;
  background: ${theme.background.main};
  width: calc(100% - 40%);
  padding: 0 20%;
  z-index: 1000;
`;

Logo.Container = styled.div`
  width: 300px;
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

Navigation.Item = styled(Link)`
  color: ${theme.gradient.end};
  margin: 0 0 0 20px;
  &:hover {
    cursor: pointer;
    color: ${theme.gradient.start};
  }
`;

Navigation.Link = styled.a`
  color: ${theme.gradient.start};
  margin: 0 0 0 20px;
  &:hover {
    cursor: pointer;
    color: ${theme.gradient.end};
  }
`;

export default () => (
  <Wrapper>
    <Logo.Container>
      <Navigation.Item
        to="header"
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
      >
        <Logo size="40px" />
      </Navigation.Item>
    </Logo.Container>
    <Navigation>
      <Navigation.Item
        to="specification"
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
      >
        SPECIFICATIONS
      </Navigation.Item>
      <Navigation.Item
        to="masternode"
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
      >
        MASTERNODE
      </Navigation.Item>
      <Navigation.Item
        to="wallet"
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
      >
        WALLET
      </Navigation.Item>
      <Navigation.Item
        to="exchanges"
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
      >
        EXCHANGES
      </Navigation.Item>
      <Navigation.Item
        to="roadmap"
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
      >
        ROADMAP
      </Navigation.Item>
      <Navigation.Item
        to="community"
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
      >
        COMMUNITY
      </Navigation.Item>
      <Navigation.Link
        href="https://explorer.tribe-crypto.com/"
        target="_blank"
      >
        EXPLORER
      </Navigation.Link>
      <Navigation.Link href="http://pool.noize.pw/" target="_blank">
        POOL
      </Navigation.Link>
    </Navigation>
  </Wrapper>
);
