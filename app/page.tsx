import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PromoBanner } from '@/components/promo-banner'
import { Levels } from '@/components/levels'
import { FullDiploma } from '@/components/full-diploma'
import { Audience } from '@/components/audience'
import { SignupForm } from '@/components/signup-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-white">
      <SiteHeader />
      <Hero />
      <PromoBanner />
      <Levels />
      <FullDiploma />
      <Audience />
      <SignupForm />
      <SiteFooter />
    </main>
  )
}
