import { ButtonContainer } from './Button.styles';

interface ButtonProps{
    tipo?: 'primary' | 'secondary' | 'danger' | 'sucess' | 'warning';
}

export function Button({tipo = 'primary'}: ButtonProps) {
    return (
        <>
            <ButtonContainer tipo={tipo} >Enviar</ButtonContainer>
        </>);
}