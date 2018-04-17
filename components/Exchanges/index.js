import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import SectionHeader from "../SectionHeader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 0 0;
  height: 100%;
  background: #fff;
  width: 100%;
`;

const Description = styled.p`
  margin: 0 20% 50px 20%;
  line-height: 30px;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`;

export default () => (
  <Wrapper>
    <SectionHeader>EXCHANGES</SectionHeader>
    <Description>
      Our goal is to get listed on the most cutting-edge and popular exchanges.
    </Description>
  </Wrapper>
);
