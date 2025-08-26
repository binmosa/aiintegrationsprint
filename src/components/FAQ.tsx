'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What exactly is the AI Integration Sprint?",
      answer: "It's a 4-week remote consulting program where we: Assess your company's AI readiness, identify and prioritize the best AI opportunities for ROI, build a working prototype (proof-of-concept) using your data, and deliver a 12-month executive roadmap for implementation. By the end, you'll have clarity, a prototype you can show, and a plan you can act on."
    },
    {
      question: "Who is this for?",
      answer: "The Sprint is designed for small and mid-size companies in the US and Singapore who want to explore AI but don't know where to start, are tired of 'AI hype' and want real outcomes (not endless workshops), and need a tangible prototype and roadmap to guide investment decisions. Typical participants: CEOs, COOs, CTOs, innovation leaders, and functional heads (sales, ops, customer support)."
    },
    {
      question: "Why only 4 weeks?",
      answer: "Because speed matters. Many companies waste months in brainstorming and strategy decks with no real proof. In just 4 weeks, you'll go from 'AI sounds interesting' to 'Here's a prototype, ROI analysis, and a clear plan.'"
    },
    {
      question: "What deliverables will I receive?",
      answer: "At the end of the Sprint, you'll get: AI Readiness Report (PDF), ROI Opportunity Matrix (Excel), Executive Roadmap Deck (PowerPoint/Slides), Working Prototype Demo (Web/App/Video), and consulting sessions directly with Dr. [Your Name]."
    },
    {
      question: "What if my company doesn't have good data?",
      answer: "That's common! Part of Week 1 is a data readiness check. If your data isn't strong enough, we can use sanitized or public datasets for the prototype, or focus on a roadmap with clear steps to improve data maturity. Either way, you'll leave with a strategy tailored to your actual situation."
    },
    {
      question: "How much does it cost?",
      answer: "The Sprint is a fixed investment of $9,500 (one-time). No hidden costs. No upselling during the sprint. This covers all consulting, workshops, prototype work, and final deliverables."
    },
    {
      question: "Is everything done remotely?",
      answer: "Yes. The Sprint is 100% online, which makes it accessible to companies anywhere in the US or Singapore, more affordable (no travel or onsite fees), and easier for your team to participate (via Zoom, Slack, or your preferred tools)."
    },
    {
      question: "How much time will my team need to commit?",
      answer: "We've designed the Sprint to minimize disruption. Typical involvement: Kickoff (90 min) with key executives, stakeholder interviews (30–45 min each) with 4–6 people, one workshop per week (60–90 min) for alignment and decisions, and final demo (60–90 min) with leadership. On average: your team spends 6–8 hours total across 4 weeks."
    },
    {
      question: "What if we want to build the full system after the Sprint?",
      answer: "You'll already have a validated use case, a prototype, and a roadmap with costs and milestones. From there, you can build internally using your own developers or engage Unietal (our company) for implementation and scaling. The Sprint is designed to set you up for whichever path you choose."
    },
    {
      question: "How is this different from hiring a generic consultant?",
      answer: "Run by a PhD in AI & CTO, not generalist consultants. You don't just get slides — you get a working prototype. Fixed timeline (4 weeks) → fast results, no endless workshops. Affordable for SMBs, but with enterprise-level outputs."
    },
    {
      question: "What industries do you work with?",
      answer: "We've worked across technology, finance, retail, manufacturing, healthcare, and professional services. The Sprint framework is industry-agnostic — we focus on your business KPIs and tailor AI opportunities accordingly."
    },
    {
      question: "What happens after I book?",
      answer: "You complete a short intake form, we schedule the Kickoff session within 7 days, you meet your Sprint team and we start the 4-week process. At the end, you get your deliverables, prototype, and roadmap."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Neural Network Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-br from-primary-400/15 to-secondary-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-br from-accent-400/15 to-primary-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-200/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-700">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-neural-900">FAQs</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-neural-600 leading-relaxed font-light max-w-4xl mx-auto">
            Questions About the AI Integration Sprint
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-md border border-primary-100/50 rounded-xl shadow-neural hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-xl"
                >
                  <h3 className="text-base font-semibold text-neural-900 leading-snug pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-4">
                    <div className="bg-gradient-to-r from-primary-50/50 to-secondary-50/50 rounded-lg p-3 border-l-3 border-primary-500">
                      <p className="text-sm text-neural-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="relative max-w-3xl mx-auto">
            <div className="neural-glow">
              <div className="card-neural p-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center shadow-glow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neural-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-neural-600 leading-relaxed mb-6">
                  Book a free 30-minute consultation to discuss your specific AI opportunities and see if the Sprint is right for your business.
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-accent-600 font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free consultation • No commitment • 30 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}