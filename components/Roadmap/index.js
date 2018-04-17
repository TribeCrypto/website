import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import ButtonGhost from "../ButtonGhost";
import Logo from "../Logo";
import SectionHeader from "../SectionHeader";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCheck from "@fortawesome/fontawesome-free-solid/faCheck";

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

const Item = styled.div`
  display: flex;
  height: 100%;
`;

Item.Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65px;
`;

Item.Right = styled.div`
  margin: 15px 15px;
  width: 550px;
`;

Item.Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.main.main};
  border-radius: 50%;
  min-height: 50px;
  max-height: 50px;
  min-width: 50px;
  max-width: 50px;
`;

Item.Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.main.main};
  border-radius: 50%;
  margin: 20px 0 0 0;
  min-height: 20px;
  max-height: 20px;
  min-width: 20px;
  max-width: 20px;
`;

Item.Road = styled.div`
  width: 2px;
  height: 100%;
  background: ${theme.main.main};
  margin: 0 0 -20px 0;
`;

Item.NoRoad = styled.div`
  width: 0px;
  height: 100%;
  background: ${theme.main.main};
  margin: 0 0 -20px 0;
`;

Item.Title = styled.h3`
  margin: 0 0 15px 0;
  font-weight: 300;
  font-size: 1.5rem;
`;

Item.Description = styled.p`
  margin: 0;
`;

export default () => (
  <Wrapper>
    <SectionHeader>ROADMAP</SectionHeader>
    <Item>
      <Item.Left>
        <Item.Icon>
          <FontAwesomeIcon icon={faCheck} fixedWidth size="lg" />
        </Item.Icon>
        <Item.Road />
      </Item.Left>

      <Item.Right>
        <Item.Title>Core Team Assembly</Item.Title>
        <Item.Description>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
        </Item.Description>
      </Item.Right>
    </Item>
    <Item>
      <Item.Left>
        <Item.Dot />
        <Item.Road />
      </Item.Left>

      <Item.Right>
        <Item.Title>Tribe MainNet Launch</Item.Title>
        <Item.Description>lorem ipsum ...</Item.Description>
      </Item.Right>
    </Item>

    <Item>
      <Item.Left>
        <Item.Dot />
        <Item.Road />
      </Item.Left>

      <Item.Right>
        <Item.Title>Windows & Mac Wallet Release</Item.Title>
        <Item.Description>lorem ipsum ...</Item.Description>
      </Item.Right>
    </Item>

    <Item>
      <Item.Left>
        <Item.Dot />
        <Item.Road />
      </Item.Left>

      <Item.Right>
        <Item.Title>Exchange Listings</Item.Title>
        <Item.Description>lorem ipsum ...</Item.Description>
      </Item.Right>
    </Item>

    <Item>
      <Item.Left>
        <Item.Dot />
        <Item.Road />
      </Item.Left>

      <Item.Right>
        <Item.Title>Mobile Wallet (Android/iOS)</Item.Title>
        <Item.Description>lorem ipsum ...</Item.Description>
      </Item.Right>
    </Item>

    <Item>
      <Item.Left>
        <Item.Dot />
        <Item.NoRoad />
      </Item.Left>

      <Item.Right>
        <Item.Title>Community Voting For Further Development</Item.Title>
        <Item.Description>lorem ipsum ...</Item.Description>
      </Item.Right>
    </Item>
  </Wrapper>
);
