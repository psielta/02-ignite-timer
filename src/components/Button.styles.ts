import styled from "styled-components";

export type TiposDeBotoes = 'primary' | 'secondary' | 'danger' | 'sucess' | 'warning';

interface ButtonContainerProps {
    tipo: TiposDeBotoes;
}
const CoresPorTipo = {
    primary: 'purple',
    secondary: 'cyan',
    warning: 'orange',
    danger: 'red',
    sucess: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    background-color: ${props => props.theme["green-300"]};
    color: ${props => props.theme.white};
    border-radius: 3px;
    margin: 1rem;
    border: none;

    /* ${props => {
        return `background-color: ${CoresPorTipo[props.tipo]}`;
    }
    } */

`