import { Achievements } from './_components/Achievements'
import { FAQ } from './_components/FAQ'
import { Features } from './_components/Features'
import { GetStarted } from './_components/GetStarted'
import { Header } from './_components/Header'
import { Hero } from './_components/Hero'
import { Plans } from './_components/Plans'
import { Testimonials } from './_components/Testimonials'

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <main className="max-w-[1120px] mx-auto">
        <Hero />
        <Features />
        <Plans />
        <Testimonials />
        <Achievements />
        <FAQ />
        <GetStarted />
      </main>
    </div>
  )
}
