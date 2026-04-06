import { HeroSection } from '@/components/home/HeroSection'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { HowItWorks } from '@/components/home/HowItWorks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knotly — Find Wedding Vendors',
  description: 'Browse and book top wedding vendors for your big day',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <HowItWorks />
    </>
  )
}