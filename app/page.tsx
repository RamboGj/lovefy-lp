import { Features } from './_components/Features'
import { Header } from './_components/Header'
import { Hero } from './_components/Hero'
import { Plans } from './_components/Plans'

export default function LandingPage() {
  return (
    <div>
      <Header />

      <main className="max-w-[1120px] mx-auto">
        <Hero />
        <Features />
        <Plans />
      </main>
    </div>
  )
}
