'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

export default function Deliverables() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const deliverables = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M3 3v18h18v-18h-18z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="3" width="18" height="18" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      title: "ROI Opportunity Analysis Report",
      subtitle: "($100K–$5M potential identified)",
      description: "Detailed financial analysis of your top AI opportunities with projected returns, implementation costs, and risk-adjusted payback periods.",
      gradient: "from-primary-500 to-secondary-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      title: "Validated ROI Matrix",
      subtitle: "(prioritized by business impact)",
      description: "Ranked opportunities with validated financial projections, feasibility scores, and competitive advantage analysis.",
      gradient: "from-secondary-500 to-accent-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      title: "ROI Validation Prototype",
      subtitle: "(using your actual data)",
      description: "Working proof-of-concept that demonstrates measurable business impact and validates projected returns before full investment.",
      gradient: "from-accent-500 to-primary-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
          <rect x="4" y="4" width="16" height="16" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      title: "ROI-Focused Implementation Roadmap",
      subtitle: "(12-month plan with returns)",
      description: "Detailed execution plan with projected ROI timelines, investment requirements, and success metrics for each opportunity.",
      gradient: "from-primary-500 to-accent-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="7" r="2" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      title: "Expert Strategic Guidance",
      subtitle: "— PhD in AI & CTO with $50M+ validated ROI",
      description: "Direct access to ensure successful implementation, validate assumptions, and maximize returns on your AI investments.",
      gradient: "from-secondary-500 to-primary-500"
    }
  ]

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <section id="deliverables" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-secondary-50/30 relative overflow-hidden">
      {/* Background Neural Network Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-32 w-80 h-80 bg-gradient-to-br from-primary-400/15 to-secondary-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-32 w-72 h-72 bg-gradient-to-br from-accent-400/15 to-primary-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/10 to-primary-500/10 backdrop-blur-sm border border-accent-200/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent-700">Validated Deliverables</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-neural-900">What You&apos;ll Walk Away With</span>
          </h2>
          <div className="section-divider"></div>
          
          <p className="text-xl md:text-2xl text-neural-600 leading-relaxed font-light max-w-4xl mx-auto">
            <span className="font-semibold gradient-text">Validated ROI opportunities</span> and actionable implementation plans — 
            not theoretical frameworks or generic templates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {deliverables.map((deliverable, index) => (
            <div 
              key={index}
              className="group card-premium hover:scale-[1.02] transition-all duration-500 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className={`p-4 bg-gradient-to-br ${deliverable.gradient} rounded-2xl shadow-neural group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-white">
                    {deliverable.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neural-900 mb-2 leading-tight group-hover:text-primary-700 transition-colors">
                {deliverable.title}
              </h3>
              
              {deliverable.subtitle && (
                <p className="text-sm font-semibold text-accent-600 mb-4 leading-relaxed">
                  {deliverable.subtitle}
                </p>
              )}
              
              <p className="text-neural-600 leading-relaxed">
                {deliverable.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="neural-glow">
              <div className="card-neural p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center shadow-glow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-2xl md:text-3xl font-bold text-neural-900 leading-relaxed mb-6">
                  You won&apos;t just get slides — you&apos;ll get validated ROI opportunities worth $100K–$5M+
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-wrap justify-center gap-3 text-sm">
                    <span className="bg-gradient-to-r from-red-100 to-red-50 text-red-700 px-4 py-2 rounded-full border border-red-200">✗ No Generic Templates</span>
                    <span className="bg-gradient-to-r from-red-100 to-red-50 text-red-700 px-4 py-2 rounded-full border border-red-200">✗ No Theoretical Frameworks</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 text-sm">
                    <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-4 py-2 rounded-full shadow-neural">✓ Validated ROI Projections</span>
                    <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-4 py-2 rounded-full shadow-neural">✓ Working Prototypes</span>
                  </div>
                </div>
                
                <p className="text-lg text-neural-700 font-light leading-relaxed">
                  Every deliverable is designed to <span className="gradient-text font-semibold">de-risk your AI investment</span> and 
                  provide concrete evidence for executive decision-making.
                </p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleBookConsultation}
            className="btn-primary text-lg px-12 py-6 relative group"
          >
            <span className="relative z-10">Validate Your AI Opportunities</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </button>
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