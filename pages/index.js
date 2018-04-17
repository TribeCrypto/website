import React from "react";
import styled from "styled-components";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Join from "../components/Join";
import Specifications from "../components/Specifications";
import Masternode from "../components/Masternode";
import Wallet from "../components/Wallet";
import Roadmap from "../components/Roadmap";
import Exchanges from "../components/Exchanges";

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
    <Header />
    <Join />
    <Specifications />
    <Masternode />
    <Wallet />
    <Exchanges />
    <Roadmap />
  </Wrapper>
);
