import { styled } from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  display: flex;
  line-height: 8rem;
  gap: 1rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 0.5rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
`
