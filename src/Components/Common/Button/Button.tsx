import React from 'react';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: any;
    ButtonText?: string;
    ButtonStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ButtonText, ButtonStyle, onClick }) => {
return (
    <button onClick={onClick} className={ButtonStyle}> { children } { ButtonText }</button>
)
}

export default React.memo(Button);