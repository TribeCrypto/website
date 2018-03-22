import React from 'react'
import styled from 'styled-components'
import { theme } from '../../lib/theme'

import Logo from '../Logo'
import SectionHeader from '../SectionHeader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  height: 480px;
  background: #fff;
  width: 100%;
`

const Description = styled.p`
  margin: 0 20%;
  line-height: 30px;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`

export default () => (
  <Wrapper>
    <SectionHeader>
      JOIN THE <span style={{ color: theme.main.main, padding: '0 0 0 10px' }}>TRIBE</span>
    </SectionHeader>
    <Description>
      Tribe is a community built crytocurrency with the focus on mass-adoption.
      Our goal is to make secure, decentralized and private transactions available
      to everyone in the world. Anyone is welcome to download the open source code
      and make contributions to the Tribe code.
    </Description>
  </Wrapper>
)