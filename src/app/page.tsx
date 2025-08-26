import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import Solution from '@/components/Solution'
import ProcessTimeline from '@/components/ProcessTimeline'
import Deliverables from '@/components/Deliverables'
import WhyChooseUs from '@/components/WhyChooseUs'
import About from '@/components/About'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemStatement />
      <Solution />
      <ProcessTimeline />
      <Deliverables />
      <WhyChooseUs />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  )
}