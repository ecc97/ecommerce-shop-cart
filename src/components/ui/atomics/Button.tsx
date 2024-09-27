import React from 'react'

type Button =  'button' | 'submit' | 'reset'

interface ButtonProps {
    type: Button
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({type, children, onClick}) => {
  return (
    <button>Button</button>
  )
}

export default Button