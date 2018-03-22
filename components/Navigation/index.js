import React from 'react'
import styled from 'styled-components'
import { theme } from '../../lib/theme'

import Logo from '../Logo'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${theme.background.main};
  width: calc(100% - 40%);
  padding: 0 20%;
`

Logo.Container = styled.div`
  width: 300px;
`

export default () => (
  <Wrapper>
    <Logo.Container>
      <Logo size='40px'/>
    </Logo.Container>
  </Wrapper>
)