import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import SectionHeader from "../SectionHeader";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faDiscord from "@fortawesome/fontawesome-free-brands/faDiscord";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faBitcoin from "@fortawesome/fontawesome-free-brands/faBitcoin";

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

const Item = styled.div`
  margin: 0 45px;
`;

Item.Icon = styled.div``;

Item.Description = styled.p`
  margin: 10px 0 0 0;
`;

Item.Container = styled.div`
  display: flex;
  margin: 0 20% 50px 20%;
  line-height: 30px;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Wrapper>
    <SectionHeader>TRIBE COMMUNITY & UPDATES</SectionHeader>
    <Description>
      Join and chat with our growing community or check out the latest news and
      updates.
    </Description>
    <Item.Container>
      <Item>
        <Item.Icon>
          <FontAwesomeIcon icon={faBitcoin} fixedWidth size="2x" />
        </Item.Icon>
        <Item.Description>Bitcointalk</Item.Description>
      </Item>

      <Item>
        <Item.Icon>
          <FontAwesomeIcon icon={faTwitter} fixedWidth size="2x" />
        </Item.Icon>
        <Item.Description>Twitter</Item.Description>
      </Item>

      <Item>
        <Item.Icon>
          <FontAwesomeIcon icon={faDiscord} fixedWidth size="2x" />
        </Item.Icon>
        <Item.Description>Discord</Item.Description>
      </Item>

      <Item>
        <Item.Icon>
          <FontAwesomeIcon icon={faGithub} fixedWidth size="2x" />
        </Item.Icon>
        <Item.Description>Github</Item.Description>
      </Item>
    </Item.Container>
  </Wrapper>
);
