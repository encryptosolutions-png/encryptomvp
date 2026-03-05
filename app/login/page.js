'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      alert(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">

      <div className="bg-white p-8 rounded shadow w-96">

        {/* Logo Space */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" className="h-10" alt="EnCrypto Logo" />
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login to EnCrypto
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-red-600 text-white w-full p-2 rounded"
        >
          Login
        </button>

      </div>

    </div>
  )
}