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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30">
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
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] animate-slide-up text-shadow">
            <span className="text-neural-900">Discover </span>
            <span className="relative inline-block">
              <span className="gradient-text">Validated ROI</span>
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform scale-x-0 animate-[scale-x-100] origin-left" style={{animationDelay: '1s', animationDuration: '0.8s', animationFillMode: 'forwards'}}></div>
            </span>
            <span className="text-neural-900"> Opportunities</span>
          </h1>
          
          {/* Visual ROI Indicator */}
          <div className="flex justify-center mb-6 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="bg-gradient-to-r from-accent-500/10 to-primary-500/10 backdrop-blur-sm border border-accent-200/30 rounded-2xl px-6 py-3 flex items-center gap-3">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-lg font-bold gradient-text">Up to $5M+ in AI Opportunities</span>
              <svg className="w-5 h-5 text-accent-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-neural-600 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in font-light" style={{animationDelay: '0.5s'}}>
            A proven framework to <span className="font-semibold gradient-text">de-risk AI investments</span> and prove 
            business value before you commit significant resources. Our{' '}
            <span className="font-semibold gradient-text">AI Integration Sprint</span> delivers measurable business impact, 
            not theoretical recommendations.
          </p>

          {/* Professional Photo & Credibility */}
          <div className="flex justify-center mb-10 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="flex items-center gap-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-primary-100/50 shadow-neural">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-glow">
                  <Image 
                    src="/images/AI_Logo.png" 
                    alt="Dr. [Your Name]" 
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain brightness-0 invert"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent-500 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <p className="font-bold text-neural-900 text-lg">Dr. [Your Name]</p>
                <p className="text-primary-600 font-medium text-sm">PhD in AI • CTO • $50M+ ROI Validated</p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="flex flex-col items-center gap-4 mb-16 animate-slide-up" style={{animationDelay: '1s'}}>
            <button 
              onClick={handleBookConsultation}
              className="btn-primary text-lg px-12 py-6 text-shadow relative group"
            >
              <span className="relative z-10">Get Your AI ROI Roadmap</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
              <div className="flex items-center gap-2 text-neural-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">30-min session • No commitment</span>
              </div>
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200/30 rounded-full px-3 py-1">
                <span className="text-xs font-semibold text-red-700">⏰ Limited to 8 clients monthly</span>
              </div>
            </div>
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
          <div className="mt-12 animate-fade-in" style={{animationDelay: '1.5s'}}>
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-primary-200/30">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium text-neural-700">Join 100+ businesses that have validated $100K–$5M in AI opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-neural-500 uppercase tracking-wide">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2 animate-pulse"></div>
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