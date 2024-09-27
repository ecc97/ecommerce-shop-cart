import React from 'react'

interface InputProps {
    type?: string;
    id: string;
    name: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type, id, name, placeholder, onChange, value}) => {
  return (
    <input type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} value={value} />
  )
}

export default Input