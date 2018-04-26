import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";

import Logo from "../Logo";
import SectionHeader from "../SectionHeader";
import Icons from "../Icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  height: 100%;
  background: #fff;
  width: 100%;
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
  width: 60px;
  fill: ${theme.gradient.end};
`;
Line.Title = styled.h3`
  margin: 10px 0;
  font-weight: 300;
  font-size: 1.6rem;
`;
Line.Description = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 300;
`;

export default () => (
  <Wrapper>
    <SectionHeader>
      JOIN THE{" "}
      <span style={{ color: theme.main.main, padding: "0 0 0 10px" }}>
        TRIBE
      </span>
    </SectionHeader>
    <Description>
      Tribe is a community built crytocurrency with the focus on mass-adoption.
      Our goal is to make secure, decentralized and private transactions
      available to everyone in the world. Anyone is welcome to download the open
      source code and make contributions to the Tribe code.
    </Description>
    <Line>
      <Line.Item>
        <Line.Icon>
          <Icons.User />
        </Line.Icon>
        <Line.Title>Anonymous</Line.Title>
        <Line.Description>
          Tribe allows users to send coins completely anonymous using the
          PrivateSend feature.
        </Line.Description>
      </Line.Item>
      <Line.Item>
        <Line.Icon>
          <Icons.Shield />
        </Line.Icon>
        <Line.Title>Secure</Line.Title>
        <Line.Description>
          The Tribe blockchain is completely decentralized and secure to used
          and doesn't have a single point of governance.
        </Line.Description>
      </Line.Item>
      <Line.Item>
        <Line.Icon>
          <Icons.Stopwatch />
        </Line.Icon>
        <Line.Title>Instant</Line.Title>
        <Line.Description>
          Tribe transactions are fast. Masternode help secure the network and
          enable quick transactions and network scalability.
        </Line.Description>
      </Line.Item>
    </Line>

    <Line>
      <Line.Item>
        <Line.Icon>
          <Icons.World />
        </Line.Icon>
        <Line.Title>No Pre-Mine</Line.Title>
        <Line.Description>
          The Tribe blockchain was launched with no pre mined coins to make the
          launch as fair as possible.
        </Line.Description>
      </Line.Item>
      <Line.Item>
        <Line.Icon>
          <Icons.ICO />
        </Line.Icon>
        <Line.Title>No ICO</Line.Title>
        <Line.Description>
          Tribe wasn't an ICO and there is no need for additional funding since
          the product is already launched.
        </Line.Description>
      </Line.Item>
      <Line.Item>
        <Line.Icon>
          <Icons.Mesh />
        </Line.Icon>
        <Line.Title>Decentralized</Line.Title>
        <Line.Description>
          Tribe Network is completely decentralized and governed by the
          community. The community also decides on the feature of the roadmap.
        </Line.Description>
      </Line.Item>
    </Line>
  </Wrapper>
);
