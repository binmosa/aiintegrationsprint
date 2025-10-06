import Header from '@/components/Header'
import HeroNew from '@/components/HeroNew'
import TrustIndicators from '@/components/TrustIndicators'
import ProblemStatement from '@/components/ProblemStatement'
import Solution from '@/components/Solution'
import ProcessTimeline from '@/components/ProcessTimeline'
import Results from '@/components/Results'
import WhyChooseUs from '@/components/WhyChooseUs'
import ValueLadder from '@/components/ValueLadder'
import FAQ from '@/components/FAQ'
import About from '@/components/About'
import Deliverables from '@/components/Deliverables'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import VisualProof from '@/components/VisualProof'
import ObjectionHandling from '@/components/ObjectionHandling'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <StickyCTA />

      {/* OVERVIEW: Hero + Trust Indicators */}
      <HeroNew />
      <TrustIndicators />

      {/* BENEFITS: Problem + Solution + Why Choose Us */}
      <ProblemStatement />
      <Solution />
      <WhyChooseUs />

      {/* PROCESS: Timeline + Deliverables */}
      <ProcessTimeline />
      <Deliverables />

      {/* OBJECTIONS: Address common concerns early */}
      <ObjectionHandling />

      {/* PROOF: Visual Before/After + Results + About */}
      <VisualProof />
      <Results />
      <About />

      {/* CALL TO ACTION: Pricing + FAQ + Final CTA */}
      <ValueLadder />
      <FAQ />
      <FinalCTA />

      <Footer />
    </main>
  )
}