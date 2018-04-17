import styled from 'styled-components'
import { theme } from '../lib/theme'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fff;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  border-radius: 3px;
  padding: 15px;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: border-color .2s ease;
  &:focus,
  &:hover {
    cursor: pointer;
    border-color: ${theme.main.main};
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    background: transparent;
  }
`

export default Button