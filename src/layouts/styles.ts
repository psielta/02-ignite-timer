import styled from 'styled-components'
export const LayoutContainer = styled.div`
  max-width: 80rem;
  height: calc(100vh - 5rem);
  margin: 2rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
