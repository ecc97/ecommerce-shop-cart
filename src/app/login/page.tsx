'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { signIn, useSession } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import styled from 'styled-components'
import Navbar from '@/components/Navbar/Navbar'

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

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
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

const SignupPrompt = styled.p`
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
interface UserLogin {
  email: string
  password: string
}

const initialLoginState: UserLogin = {
  email: '',
  password: ''
}

export default function LoginPage() {
  const traduction = useTranslations("LoginView")
  const { status, data: session } = useSession()
  const router = useRouter()
  const [loginState, setLoginState] = React.useState<UserLogin>(initialLoginState)
  const [error, setError] = React.useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginState({...loginState, [name]: value })
    // setLoginState(prevState => ({ ...prevState, [name]: value,}));
  }

  React.useEffect(() => {
    if (status === 'authenticated') {
      router.push('/products')
    }
  }, [status, router])

  const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: loginState.email,
        password: loginState.password,
      })

      if (result?.error) {
        setError(traduction("invalidCredentials"))
        console.error(result.error)
      } else {
        setLoginState(initialLoginState)
        setError(null)
        console.log(result)
        const updatedSession = await getSession()
        console.log(session?.user.email)
        console.log(updatedSession?.user.email)
        console.log(updatedSession?.user.username)
        router.push('/products')
      }

    } catch (error) {
      console.error(error)
      setError(traduction("someError"))
      setLoginState(initialLoginState)
    }
  }

  return (
    <>
    <Navbar />
    <PageContainer>
      <FormCard>
        <Title>{traduction("title")}</Title>
        {status === 'unauthenticated' && (
          <form onSubmit={handleLogin}>
            <Input type="email" name='email' placeholder={traduction("email")} value={loginState.email} onChange={handleInputChange} required />
            <Input type="password" name='password' placeholder={traduction("password")} value={loginState.password} onChange={handleInputChange} required />
            <SubmitButton type="submit">{traduction("buttonLogin")}</SubmitButton>
          </form>
        )}
        {error && <p style={{ color:'red' }}>{error}</p>}
        <SignupPrompt>
          {traduction("promptText")} <Link href="/register">{traduction("linkRegister")}</Link>
        </SignupPrompt>
      </FormCard>
    </PageContainer>
    </>
  )
}