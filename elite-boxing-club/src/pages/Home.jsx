import CallToAction from '../components/CallToAction.jsx'
import CoachCards from '../components/CoachCards.jsx'
import HeroSection from '../components/HeroSection.jsx'
import PricingCards from '../components/PricingCards.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import TrainingPrograms from '../components/TrainingPrograms.jsx'
import { coaches } from '../data/siteData.js'

function Home() {
  return (
    <>
      <HeroSection />
      <TrainingPrograms />
      <CoachCards coaches={coaches.slice(0, 3)} />
      <PricingCards />
      <TestimonialsSection />
      <CallToAction />
    </>
  )
}

export default Home
