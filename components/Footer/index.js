import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import SectionHeader from "../SectionHeader";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faDiscord from "@fortawesome/fontawesome-free-brands/faDiscord";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faBitcoin from "@fortawesome/fontawesome-free-brands/faBitcoin";

import Logo from "../Logo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 75px 0 50px 0;
  height: 100%;
  background: ${theme.footer.main};
  color: ${theme.text.main};
  width: 100%;
`;

const Description = styled.p`
  margin: 25px 20% 50px 20%;
  line-height: 30px;
  font-weight: 300;
  font-size: 0.8rem;
  text-align: center;
`;

export default () => (
  <Wrapper>
    <Logo size="45px" />
    <Description>
      Copyright 2018, all rights reserved. Developed and Designed worldwide by
      The Tribe Community
    </Description>
  </Wrapper>
);
