import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { SessionProvider } from '@/components/providers/SessionProvider'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Knotly — Wedding Vendor Directory',
  description: 'Find and book the perfect wedding vendors for your big day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}