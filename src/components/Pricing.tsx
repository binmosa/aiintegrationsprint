'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

export default function Pricing() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  const packageIncludes = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "ROI Opportunity Analysis",
      description: "systematic evaluation of your highest-value AI opportunities with financial projections."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Validated ROI Projections",
      description: "prioritized opportunities with detailed financial impact analysis and risk assessment."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "ROI-Focused Implementation Roadmap",
      description: "12-month plan with projected returns, resource requirements, and success milestones."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "ROI Validation Prototype",
      description: "working proof-of-concept demonstrating measurable business impact with your actual data."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Consulting Sessions",
      description: "direct guidance with Dr. [Your Name] throughout the sprint."
    }
  ]

  const whyChooseSprint = [
    "Validate $100K–$5M in ROI opportunities in 4 weeks, not 4 months of theoretical planning.",
    "De-risk AI investments with proven framework before you spend $500K+ on implementation.",
    "Led by a PhD in AI & CTO with $50M+ in validated ROI outcomes — not generic consultants."
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="pricing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path d="M100,300 Q300,200 500,350 T900,300" stroke="url(#pricing-gradient)" strokeWidth="1" fill="none" className="animate-pulse" />
          <path d="M150,500 Q400,400 650,550 T950,500" stroke="url(#pricing-gradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="300" cy="250" r="3" fill="#ffffff" className="animate-pulse opacity-60" />
          <circle cx="700" cy="350" r="4" fill="#22c55e" className="animate-pulse opacity-70" style={{animationDelay: '0.5s'}} />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/20 to-white/10 backdrop-blur-sm border border-accent-400/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent-300">Transparent, Fixed Pricing</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Validate </span>
            <span className="bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent">$100K–$5M</span>
            <span className="text-white"> in ROI</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed mb-4">
            One Proven Framework. Measurable Business Impact.
          </p>
          <p className="text-lg text-blue-200 leading-relaxed max-w-3xl mx-auto">
            A 4-week systematic approach to identify, validate, and quantify your highest-ROI AI opportunities.
            <br />
            No speculation, no vendor pitches — just validated opportunities with clear implementation roadmaps.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-400/30 to-white/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-400 text-white rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI Integration Sprint Package
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  <p className="text-accent-300 text-lg font-medium mb-2">Investment</p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-6xl md:text-8xl font-bold text-white">$9,500</span>
                    <div className="text-left">
                      <div className="text-accent-300 text-sm font-medium">one-time</div>
                      <div className="text-blue-200 text-sm">4 weeks, remote</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-accent-500/20 to-white/10 rounded-xl p-4 border border-accent-400/30">
                  <p className="text-accent-200 text-sm font-medium mb-1">Potential ROI Identification</p>
                  <p className="text-white text-2xl font-bold">$100K – $5M+</p>
                  <p className="text-blue-200 text-sm">Average client validates 10-50x ROI opportunities</p>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white text-center mb-8">What&apos;s included:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {packageIncludes.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 p-2 bg-gradient-to-r from-accent-500 to-accent-400 rounded-lg">
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-blue-200 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Sprint */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white text-center mb-6">Why businesses choose the Sprint</h3>
                <div className="space-y-3">
                  {whyChooseSprint.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-blue-100">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button 
                  onClick={handleBookConsultation}
                  className="relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-600 hover:to-accent-500 text-white font-bold text-lg rounded-xl shadow-glow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book Your Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </button>
                <p className="text-blue-300 text-sm mt-4">
                  🔒 30-minute consultation • No commitment required • Free assessment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Validate Your AI Investment?</h3>
            <p className="text-blue-200 leading-relaxed">
              Join forward-thinking executives who have identified $100K–$5M in validated ROI opportunities. 
              Our proven framework de-risks your AI investment and delivers measurable business impact — not theoretical recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  )
}