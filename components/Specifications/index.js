import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import Button from "../Button";
import Logo from "../Logo";
import SectionHeader from "../SectionHeader";
import Icons from "../Icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  height: 100%;
  background: linear-gradient(
    ${theme.background.main},
    ${theme.background.dark}
  );
  width: 100%;
  color: #fff;
`;

const Description = styled.p`
  margin: 0 20%;
  line-height: 30px;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-around;
  width: calc(100% - 20%);
  margin: 50px 10%;
`;
Line.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  margin: 0 10px;
`;
Line.Icon = styled.div`
  margin: 15px 0 0 0;
  padding: 0 30px;
  fill: #fff;
`;
Line.Title = styled.h3`
  margin: 10px 0;
  font-weight: 300;
  font-size: 1.6rem;
  color: ${theme.main.main};
`;
Line.Icon.Wrapper = styled.div`
  color: ${theme.main.main};
  display: flex;
  font-size: 4.5rem;
  font-weight: 100;
  margin: 0 0 25px 0;
`;
Line.Description = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 300;
`;

Button.Container = styled.div`
  width: 350px;
  margin: 50px 0 0 0;
`;

export default () => (
  <Wrapper>
    <SectionHeader>
      <span style={{ color: theme.main.main }}>
        TRIBE CRYPTO SPECIFICATIONS
      </span>
    </SectionHeader>
    <Description>
      Tribe is a Decentralized Masternode Network using the X11 hashing
      algorithm: 11 rounds of scientific hashing functions (blake, bmw, groestl,
      jh, keccak, skein, luffa, cubehash, shavite, simd, echo)
    </Description>
    <Line>
      <Line.Item>
        <Line.Icon.Wrapper>
          [
          <Line.Icon>
            <Icons.Mining size="70px" />
          </Line.Icon>
          ]
        </Line.Icon.Wrapper>
        <Line.Title>CPU/GPU/ASIC Mining</Line.Title>
        <Line.Description>
          X11 hashing algorithm: 11 rounds of scientific hashing functions
          (blake, bmw, groestl, jh, keccak, skein, luffa, cubehash, shavite,
          simd, echo)
        </Line.Description>
      </Line.Item>
      <Line.Item>
        <Line.Icon.Wrapper>
          [
          <Line.Icon>
            <Icons.Cube size="70px" />
          </Line.Icon>
          ]
        </Line.Icon.Wrapper>
        <Line.Title>Block Reward</Line.Title>
        <Line.Description>
          Block generation: 2.5 minutes
          <br />
          Masternode: 30% - Miner: 70%
        </Line.Description>
      </Line.Item>
      <Line.Item>
        <Line.Icon.Wrapper>
          [
          <Line.Icon>
            <Icons.Gears size="70px" />
          </Line.Icon>
          ]
        </Line.Icon.Wrapper>
        <Line.Title>Max Supply</Line.Title>
        <Line.Description>
          Est. ~ 18.9M Coins
          <br />
          Difficulty retargets using Dark Gravity Wave
        </Line.Description>
      </Line.Item>
      <Line.Item>
        <Line.Icon.Wrapper>
          [
          <Line.Icon>
            <Icons.Wallet size="70px" />
          </Line.Icon>
          ]
        </Line.Icon.Wrapper>
        <Line.Title>Transactions</Line.Title>
        <Line.Description>
          Transaction confirmations: 6
          <br />
          Maturing 101 confirmations
          <br />
          InstantSend confirmations: ~ 5 seconds
        </Line.Description>
      </Line.Item>
    </Line>
    <Button.Container>
      <Button>VIEW FULL SPECS ON GITHUB</Button>
    </Button.Container>
  </Wrapper>
);
