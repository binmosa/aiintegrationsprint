'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModal'

export default function Hero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30 pt-20">
      {/* Neural Network Background */}
      <div className="absolute inset-0 bg-neural-pattern opacity-30"></div>
      
      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            top: '60%',
            right: '10%',
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-secondary-400/25 to-accent-400/25 rounded-full blur-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            bottom: '20%',
            left: '20%',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* AI-Inspired Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-secondary-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-accent-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-6 h-6 border border-primary-400 rounded-full animate-ping opacity-30"></div>
        
        {/* Neural Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#08aee0" />
              <stop offset="50%" stopColor="#22c9f4" />
              <stop offset="100%" stopColor="#5de0fa" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,250 T900,200" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M150,400 Q400,300 650,450 T950,400" stroke="url(#neural-gradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <path d="M50,600 Q250,500 450,650 T850,600" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '2s'}} />
          
          <circle cx="200" cy="250" r="6" fill="#08aee0" className="animate-pulse opacity-80" />
          <circle cx="500" cy="180" r="4" fill="#22c9f4" className="animate-pulse opacity-70" style={{animationDelay: '0.5s'}} />
          <circle cx="800" cy="220" r="5" fill="#5de0fa" className="animate-pulse opacity-60" style={{animationDelay: '1s'}} />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-200/30 rounded-full mb-8 animate-slide-up">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-700">Proven ROI Framework • Risk-Free Validation</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-10 leading-[1.05] animate-slide-up text-shadow-lg">
            <span className="text-neural-900">Validate </span>
            <span className="relative inline-block">
              <span className="gradient-text">$100K–$5M</span>
              <div className="absolute -bottom-4 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transform scale-x-0 animate-[scale-x-100] origin-left shadow-glow" style={{animationDelay: '1s', animationDuration: '0.8s', animationFillMode: 'forwards'}}></div>
            </span>
            <br />
            <span className="text-neural-900">in AI ROI </span>
            <span className="gradient-text">in 4 Weeks</span>
          </h1>

          {/* Enhanced Value Proposition */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="bg-gradient-to-r from-accent-500/15 to-primary-500/15 backdrop-blur-md border-2 border-accent-300/50 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-glow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-glow">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold gradient-text-accent">De-Risk Before You Invest</div>
                  <div className="text-sm font-semibold text-neural-700">Validated opportunities, not theoretical reports</div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-neural-600 mb-10 leading-relaxed max-w-5xl mx-auto animate-fade-in font-light" style={{animationDelay: '0.5s'}}>
            Stop gambling on AI projects. Our <span className="font-bold gradient-text-accent">proven 4-week framework</span> identifies,
            validates, and quantifies your highest-ROI AI opportunities <span className="font-bold text-neural-900">before</span> you commit
            to expensive implementation. Get a working prototype, validated ROI projections, and a clear roadmap — not another consulting report.
          </p>

          {/* Enhanced Consultant Authority Section */}
          <div className="flex justify-center mb-10 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-primary-100/50 shadow-premium max-w-4xl w-full">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Professional Photo */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-glow border-4 border-white/50">
                    <Image 
                      src="/images/consultant/mosa-2.png" 
                      alt="Mosa - AI Integration Sprint Leader" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full border-3 border-white flex items-center justify-center shadow-glow">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Credentials */}
                <div className="text-center lg:text-left flex-1">
                  <h3 className="font-bold text-neural-900 text-2xl mb-2">Mosa Alsawadi</h3>
                  <div className="text-primary-600 font-semibold text-lg mb-4">
                    PhD in AI • Co-Founder & CTO • Business Transformation Expert
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200/30 rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-accent-700">$50M+ ROI Validated</span>
                    </div>
                    <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200/30 rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-primary-700">100+ Businesses Guided</span>
                    </div>
                  </div>
                </div>

                {/* Authority Images Preview */}
                <div className="hidden lg:flex gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-neural opacity-80 hover:opacity-100 transition-opacity">
                    <Image 
                      src="/images/consultant/mosa-1.png" 
                      alt="University Lecture" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-neural opacity-80 hover:opacity-100 transition-opacity">
                    <Image 
                      src="/images/consultant/mosa-3.png" 
                      alt="Workshop Session" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section with Scarcity/Urgency */}
          <div className="flex flex-col items-center gap-6 mb-16 animate-slide-up" style={{animationDelay: '1s'}}>
            <button
              onClick={handleBookConsultation}
              className="btn-primary text-xl px-16 py-7 text-shadow-lg relative group transform hover:-translate-y-1"
            >
              <span className="relative z-10 font-bold">Get Your Free ROI Assessment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </button>

            {/* Trust Signals + Scarcity */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-neural-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">30-minute consultation • $0 commitment</span>
              </div>
              <div className="bg-gradient-to-r from-red-500/15 to-orange-500/15 border-2 border-red-400/40 rounded-full px-5 py-2 shadow-neural animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-bold text-red-700">Only 8 spots available each month</span>
                </div>
              </div>
            </div>

            {/* Micro-commitment */}
            <p className="text-neural-600 text-sm font-medium">
              Join 100+ businesses that validated $100K–$5M opportunities in 4 weeks
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
            <p className="text-sm text-neural-500 uppercase tracking-wide font-semibold mb-6">
              $50M+ in Validated ROI Opportunities Identified
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="neural-glow">
                <Image 
                  src="/images/AI_Logo.png" 
                  alt="AI Integration Sprint" 
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="flex items-center space-x-6">
                <div className="h-10 w-24 bg-gradient-to-r from-neural-300 to-neural-400 rounded-lg"></div>
                <div className="h-10 w-28 bg-gradient-to-r from-neural-300 to-neural-400 rounded-lg"></div>
                <div className="h-10 w-26 bg-gradient-to-r from-neural-300 to-neural-400 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 mb-16 animate-fade-in" style={{animationDelay: '1.5s'}}>
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-primary-200/30">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium text-neural-700">Join 100+ businesses that have validated $100K–$5M in AI opportunities</span>
            </div>
          </div>

          {/* Scroll Indicator - Moved below social proof */}
          <div className="mt-8 animate-fade-in" style={{animationDelay: '1.8s'}}>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs text-neural-500 uppercase tracking-wide font-semibold">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
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