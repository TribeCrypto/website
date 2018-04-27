import React from "react";
import styled from "styled-components";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Join from "../components/Join";
import Specifications from "../components/Specifications";
import Masternode from "../components/Masternode";
import Wallet from "../components/Wallet";
import Roadmap from "../components/Roadmap";
import Exchanges from "../components/Exchanges";
import Community from "../components/Community";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <Wrapper>
    <Navigation />
    <Element name="header" className="element">
      <Header />
    </Element>
    <Element name="join" className="element">
      <Join />
    </Element>
    <Element name="specification" className="element">
      <Specifications />
    </Element>
    <Element name="masternode" className="element">
      <Masternode />
    </Element>
    <Element name="wallet" className="element">
      <Wallet />
    </Element>
    <Element name="exchanges" className="element">
      <Exchanges />
    </Element>
    <Element name="roadmap" className="element">
      <Roadmap />
    </Element>
    <Element name="community" className="element">
      <Community />
    </Element>
    <Footer />
  </Wrapper>
);
