'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

export default function FinalCTA() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-accent-400 to-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="finalcta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#08aee0" />
            </linearGradient>
          </defs>
          <path d="M100,300 Q400,200 700,350 T900,300" stroke="url(#finalcta-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M200,500 Q500,400 800,550 T1000,500" stroke="url(#finalcta-gradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="400" cy="250" r="4" fill="#ffffff" className="animate-pulse opacity-80" />
          <circle cx="700" cy="400" r="3" fill="#22c55e" className="animate-pulse opacity-70" style={{animationDelay: '0.5s'}} />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Urgency Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-300/30 rounded-full">
              <svg className="w-5 h-5 text-red-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-red-200">⏰ Only 8 spots available monthly • 4 already taken</span>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="text-center mb-12">
            {/* Main Headline */}
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Stop Guessing. </span>
              <span className="bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent">Start Validating.</span>
            </h2>
            
            {/* Value Proposition */}
            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-2xl md:text-3xl text-blue-100 mb-6 leading-relaxed font-light">
                Don&apos;t waste months researching AI solutions that may not work. 
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                In just <span className="font-bold text-accent-300">6 weeks</span>, you&apos;ll have <span className="font-bold text-accent-300">validated ROI projections</span>, a <span className="font-bold text-accent-300">working prototype</span>, and a <span className="font-bold text-accent-300">risk-assessed roadmap</span> designed specifically for your business.
              </p>
            </div>

            {/* ROI Comparison */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6">
                <div className="text-red-300 text-lg font-bold mb-3">❌ Traditional Approach</div>
                <div className="text-red-200 space-y-2 text-left">
                  <p>• 6-12 months of research</p>
                  <p>• $500K+ investment risk</p>
                  <p>• 70% chance of failure</p>
                  <p>• Theoretical recommendations</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent-500/20 to-primary-500/20 border border-accent-400/30 rounded-2xl p-6">
                <div className="text-accent-300 text-lg font-bold mb-3">✅ AI Integration Sprint</div>
                <div className="text-accent-200 space-y-2 text-left">
                  <p>• 6 weeks to validation</p>
                  <p>• $9,500 de-risking investment</p>
                  <p>• Validated $100K–$5M opportunities</p>
                  <p>• Working prototypes & ROI proof</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto">
              {/* Primary CTA */}
              <button 
                onClick={handleBookConsultation}
                className="group relative bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-600 hover:to-accent-500 text-white font-bold py-8 px-16 rounded-2xl text-2xl shadow-glow hover:shadow-glow-lg transform hover:scale-[1.02] transition-all duration-300 mb-6 w-full md:w-auto overflow-hidden"
              >
                <span className="relative z-10">Get Your AI ROI Validation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </button>
              
              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-4 text-left mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                  </div>
                  <span className="text-blue-100">30-min free consultation • No commitment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                  </div>
                  <span className="text-blue-100">Immediate ROI assessment included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                  </div>
                  <span className="text-blue-100">Discuss your specific use cases</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                  </div>
                  <span className="text-blue-100">Get preliminary opportunity estimate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Trust Elements */}
          <div className="text-center">
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Dr. [Your Name]</div>
                  <div className="text-blue-200 text-sm">PhD in AI • CTO</div>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">$50M+</div>
                <div className="text-blue-200 text-sm">ROI Validated</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">100+</div>
                <div className="text-blue-200 text-sm">Businesses Helped</div>
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