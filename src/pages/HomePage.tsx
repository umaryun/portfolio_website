import { NavBar } from '../components/NavBar'
import { HeroSection } from '../components/HeroSection'
import { TrustBar } from '../components/TrustBar'
import { ExpertiseSection } from '../components/ExpertiseSection'
import { SelectedWork } from '../components/SelectedWork'
import { ExperienceSection } from '../components/ExperienceSection'
import { AboutSection } from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <TrustBar />
        <ExpertiseSection />
        <SelectedWork />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
