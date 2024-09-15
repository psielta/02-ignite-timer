import styled from 'styled-components'

const ButtonVariants = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
}

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  ${(props) => `background-color: ${ButtonVariants[props.variant]};`}
`
