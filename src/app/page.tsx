import Header from '@/components/Header'
import Hero from '@/components/Hero'
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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <TrustIndicators />
      <ProblemStatement />
      <Solution />
      <ProcessTimeline />
      <Results />
      <WhyChooseUs />
      <ValueLadder />
      <About />
      <Deliverables />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}