import React from 'react'
import styled from 'styled-components'
import { theme } from '../lib/theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.text.main};
  font-size: 2.4rem;
  height: 100px;
  font-weight: 300;
`

const Bracket = styled.div`
  font-size: 3rem;
  padding: 0 10px;
  font-weight: 300;
  color: ${props => props.color ? props.color : theme.main.main};
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Divider = styled.hr`
  border: none;
  background: ${theme.main.main};
  height: 3px;
  width: 145px;
`

export default ({ children, color }) => (
  <Wrapper>
    <Container>
      <Bracket color={color}>[</Bracket>
      {children}
      <Bracket color={color}>]</Bracket>
    </Container>
    <Divider />
  </Wrapper>
)