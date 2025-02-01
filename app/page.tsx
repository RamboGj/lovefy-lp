import { Header } from './_components/Header'
import { Hero } from './_components/Hero'

export default function LandingPage() {
  return (
    <div>
      <Header />

      <main className="max-w-[1120px] mx-auto">
        <Hero />
      </main>
    </div>
  )
}
