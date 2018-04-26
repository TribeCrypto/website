import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import ButtonGhost from "../ButtonGhost";
import Logo from "../Logo";
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

const CTA = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    ${theme.gradient.start},
    ${theme.gradient.end}
  );
`;

CTA.Wrapper = styled.div`
  width: 350px;
`;

export default () => (
  <Wrapper>
    <SectionHeader>START YOUR TRIBE MASTENODE</SectionHeader>
    <Description>
      Help sustain the TRIBE Netwok and earn passive-income by running a TRIBE
      masternode. All masternodes get 30% of every block reward. Masternode
      collateral is a 1000 Tribe coins.
    </Description>
    <CTA>
      <CTA.Wrapper>
        <a
          href="https://steemit.com/masternode/@m33lucky/setting-up-the-tribe-masternode"
          target="_blank"
        >
          <ButtonGhost>TRIBE MASTENODE SETUP GUIDE</ButtonGhost>
        </a>
      </CTA.Wrapper>
    </CTA>
  </Wrapper>
);
