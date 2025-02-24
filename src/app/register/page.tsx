'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import Navbar from '@/components/Navbar/Navbar'
import { showSuccessRegister, showRegistrationError } from '@/components/Alerts'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #8e2de2, #4a00e0);
`

const FormCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #8e2de2, #4a00e0);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`

const LoginPrompt = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #666;

  a {
    color: #8e2de2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

interface UserRegister {
  username: string
  email: string
  password: string
  passwordConfirm: string
}

const initialStateRegister: UserRegister = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: ''
}

export default function RegisterPage() {
  const traduction = useTranslations("RegisterView")
  const router = useRouter()
  const [registerState, setRegisterState] = React.useState<UserRegister>(initialStateRegister)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setRegisterState((prevState) => ({...prevState, [name]: value }))
  }
  
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
  
    if (registerState.password!== registerState.passwordConfirm) {
      setError('Las contraseñas no coinciden')
      setLoading(false)
      return
    }

    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: registerState.username, email: registerState.email, password: registerState.password }),
      })
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error( errorData.message || "Error al registrar la cuenta")
      }

      const data = await res.json()
      console.log(data)

      await showSuccessRegister()

      router.push("/login")
    } catch (error) {
      const errorMessage = (error as Error).message;

      showRegistrationError(errorMessage)

      setError(errorMessage);
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
    <Navbar />
    <PageContainer>
      <FormCard>
        <Title>{traduction("title")}</Title>
        <form onSubmit={handleRegister}>
          <Input type="text" name='username' placeholder={traduction("username")} value={registerState.username} onChange={handleChange} required />
          <Input type="email" name='email' placeholder={traduction("email")} value={registerState.email} onChange={handleChange} required />
          <Input type="password" name='password' placeholder={traduction("password")} value={registerState.password} onChange={handleChange} required />
          <Input type="password" name='passwordConfirm' placeholder={traduction("confirmPassword")} value={registerState.passwordConfirm} onChange={handleChange} required />
          <SubmitButton type="submit" disabled={loading}>{traduction("buttonRegister")}</SubmitButton>
          {loading && <p>Cargando...</p>}
          {error && <p className="error text-red-500">{error}</p>}
        </form>
        <LoginPrompt>
          {traduction("promptText")} <Link href="/login">{traduction("linkLogin")}</Link>
        </LoginPrompt>
      </FormCard>
    </PageContainer>
    </>
  )
}