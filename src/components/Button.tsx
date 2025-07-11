import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <>
      <ButtonContainer variant={variant}>Click me</ButtonContainer>
    </>
  )
}
