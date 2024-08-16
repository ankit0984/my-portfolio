import Hero from '@/components/app-components/Hero'
import About from '@/components/app-components/About'
import Services from '@/components/app-components/services'
import Work from '@/components/app-components/Work'
import Reviews from '@/components/app-components/Reviews'
import Cta from '@/components/app-components/Cta'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  )
}
