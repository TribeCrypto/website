import React from "react";
import styled from "styled-components";
import { theme } from "../../lib/theme";
import ButtonGhost from "../ButtonGhost";
import Logo from "../Logo";
import SectionHeader from "../SectionHeader";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faWindows from "@fortawesome/fontawesome-free-brands/faWindows";
import faLinux from "@fortawesome/fontawesome-free-brands/faLinux";
import faApple from "@fortawesome/fontawesome-free-brands/faApple";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

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
  margin: 0px 10%;
  flex-wrap: wrap;
`;
Line.Item = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 20px 0;
`;
Line.Icon = styled.div`
  padding: 0 30px;
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

ButtonGhost.Container = styled.div`
  width: 350px;
  margin: 50px 0 0 0;
`;

ButtonGhost.Icon = styled(FontAwesomeIcon)`
  padding: 0 5px;
`;

export default () => (
  <Wrapper>
    <SectionHeader>DOWNLOAD WALLET</SectionHeader>
    <br /> <br />
    <Line>
      <Line.Item
        href="https://github.com/TribeCrypto/tribe/releases/download/v1.0.0/tribe-qt-v1.0.0.1-win64.zip"
        target="_blank"
      >
        <ButtonGhost>
          <ButtonGhost.Icon icon={faWindows} fixedWidth size="lg" /> 64-BIT
          WINDOWS
        </ButtonGhost>
      </Line.Item>
      <Line.Item>
        <ButtonGhost disabled>
          <ButtonGhost.Icon icon={faWindows} fixedWidth size="lg" /> 32-BIT
          WINDOWS
        </ButtonGhost>
      </Line.Item>
      <Line.Item
        href="https://github.com/TribeCrypto/tribe/releases/download/v1.0.0/tribe-v1.0.0.1-ubuntu.tar.gz"
        target="_blank"
      >
        <ButtonGhost>
          <ButtonGhost.Icon icon={faLinux} fixedWidth size="lg" /> 64-BIT LINUX
        </ButtonGhost>
      </Line.Item>
    </Line>
    <Line>
      <Line.Item>
        <ButtonGhost disabled>
          <ButtonGhost.Icon icon={faLinux} fixedWidth size="lg" /> 32-BIT Linux
        </ButtonGhost>
      </Line.Item>
      <Line.Item>
        <ButtonGhost disabled>
          <ButtonGhost.Icon icon={faApple} fixedWidth size="lg" /> OSX
        </ButtonGhost>
      </Line.Item>
      <Line.Item href="https://github.com/TribeCrypto/tribe" target="_blank">
        <ButtonGhost>
          <ButtonGhost.Icon icon={faGithub} fixedWidth size="lg" /> SOURCE CODE
        </ButtonGhost>
      </Line.Item>
    </Line>
  </Wrapper>
);
