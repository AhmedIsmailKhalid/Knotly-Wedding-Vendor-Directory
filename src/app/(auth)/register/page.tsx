import { Metadata } from 'next'
import { RegisterForm } from '@/components/auth/RegisterForm'

export const metadata: Metadata = {
  title: 'Create Account — Knotly',
  description: 'Create your Knotly account',
}

export default function RegisterPage() {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Create your account</h2>
        <p className="text-sm text-gray-500 mt-1">Join thousands of couples and vendors</p>
      </div>
      <RegisterForm />
    </>
  )
}