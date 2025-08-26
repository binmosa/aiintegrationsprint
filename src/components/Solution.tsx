'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

export default function Solution() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
          <circle cx="11" cy="11" r="3" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      title: "Quantify $100K–$5M in validated ROI opportunities",
      description: "We analyze your business processes and identify specific AI opportunities with measurable financial impact and implementation roadmaps.",
      gradient: "from-primary-400 to-secondary-400"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2"/>
          <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      title: "Validate ROI with a working prototype using your data",
      description: "We build a functional proof-of-concept that demonstrates measurable business impact before you invest in full implementation.",
      gradient: "from-secondary-400 to-accent-400"
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
      title: "Receive a prioritized roadmap with ROI projections",
      description: "Get a detailed 12-month implementation plan with projected ROI, resource requirements, and risk mitigation strategies for each opportunity.",
      gradient: "from-accent-400 to-primary-400"
    }
  ]

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 relative overflow-hidden">
      {/* Background Neural Network Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-accent-400/15 to-primary-400/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Neural Network SVG Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="solution-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#08aee0" />
              <stop offset="50%" stopColor="#22c9f4" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path d="M200,200 Q400,150 600,300 T900,250" stroke="url(#solution-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M100,500 Q350,400 600,550 T950,500" stroke="url(#solution-gradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="400" cy="200" r="4" fill="#08aee0" className="animate-pulse opacity-70" />
          <circle cx="600" cy="300" r="5" fill="#22c9f4" className="animate-pulse opacity-80" style={{animationDelay: '0.5s'}} />
          <circle cx="800" cy="250" r="3" fill="#22c55e" className="animate-pulse opacity-60" style={{animationDelay: '1s'}} />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/10 to-primary-500/10 backdrop-blur-sm border border-accent-200/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent-700">The Solution</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-neural-900">Our Proven </span>
            <span className="gradient-text">ROI Framework</span>
          </h2>
          <div className="section-divider"></div>
          
          <p className="text-xl md:text-2xl text-neural-600 leading-relaxed font-light max-w-4xl mx-auto">
            In just <span className="font-semibold gradient-text">4 weeks</span>, we systematically de-risk your AI investment by:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group card-premium hover:scale-[1.02] transition-all duration-500 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className={`p-4 bg-gradient-to-br ${benefit.gradient} rounded-2xl shadow-neural group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neural-900 mb-4 leading-tight group-hover:text-primary-700 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-neural-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="neural-glow">
              <div className="card-neural p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center shadow-glow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-neural-900 leading-relaxed mb-4">
                  No risky investments. No theoretical frameworks.
                </p>
                <p className="text-xl text-neural-700 font-light">
                  Just <span className="gradient-text font-semibold">validated ROI opportunities and proven results</span>.
                </p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleBookConsultation}
            className="btn-primary text-lg px-12 py-6 relative group"
          >
            <span className="relative z-10">See If Your Business Qualifies</span>
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