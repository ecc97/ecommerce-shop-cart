import React from 'react'

interface FormProps {
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
    className?: string;
    noValidate?: boolean;
    autoComplete?: 'on' | 'off';
    onReset?: () => void;
}

const Form: React.FC<FormProps> = ({onSubmit, children}) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form