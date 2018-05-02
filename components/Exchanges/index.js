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

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Container.Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px 25px 25px;
  width: 200px;
  height: 200px;
  border: 1px solid #aaa;
  transition: border-color 0.2s ease;
  &:hover {
    cursor: pointer;
    border: 1px solid #333;
  }
`;

export default () => (
  <Wrapper>
    <SectionHeader>EXCHANGES</SectionHeader>
    <Description>
      Our goal is to get listed on the most cutting-edge and popular exchanges.
    </Description>
    <Container>
      <Container.Item
        href="https://novaexchange.com/market/BTC_TRIBE/"
        target="_blank"
      >
        <img
          alt="Nova Exchange"
          src="https://res.cloudinary.com/hafen/image/upload/c_scale,f_auto,q_auto:eco,w_150/v1524763121/novaexchange_logo_big_t397md.png"
        />
      </Container.Item>
    </Container>
  </Wrapper>
);
