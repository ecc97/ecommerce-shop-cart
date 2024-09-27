"use client"

import React from 'react'

interface FormSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <section className="form-section">
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default FormSection