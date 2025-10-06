'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModal'

export default function HeroNew() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50/40 via-white to-secondary-50/30 pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-200/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">Proven ROI Framework • Risk-Free Validation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-neural-900 mb-6 leading-tight">
              Find Out Where AI Can Actually Help <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">Your Business</span><br />
              <span className="text-neural-700">in 6 Weeks</span>
            </h1>

            <p className="text-xl md:text-2xl text-neural-600 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
              When you&apos;re considering AI, you want proof it&apos;ll work for your business — not just slides and promises. You&apos;ll get a working prototype, validated projections, and a clear roadmap based on your actual data.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-base"
              >
                Book Free Consultation (Get 3-5 AI Ideas for Your Business)
              </button>
              <a href="#results" className="border-2 border-primary-500/30 bg-white hover:bg-primary-50 text-primary-700 hover:text-primary-800 font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-base">
                See Results
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neural-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">You&apos;ll get 3-5 specific AI ideas • No obligation</span>
              </div>
              <div className="h-4 w-px bg-primary-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="font-semibold">30-minute call with AI PhD & CTO</span>
              </div>
            </div>
          </div>

          {/* Consultant card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-xl p-6 flex items-center gap-6 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-200">
                  <Image
                    src="/images/consultant/mosa-2.png"
                    alt="Mosa Alsawadi"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-neural-900 mb-1">Mosa Alsawadi</h3>
                <p className="text-sm text-primary-600 font-semibold mb-2">PhD in AI • Co-Founder & CTO</p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-3 py-1 bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200/30 rounded-full font-semibold text-accent-700">$50M+ ROI Validated</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200/30 rounded-full font-semibold text-primary-700">10+ Years in AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10+ years', label: 'AI Experience', gradient: 'from-primary-600 to-secondary-600' },
              { value: 'PhD in AI', label: 'Academic Research', gradient: 'from-secondary-600 to-accent-600' },
              { value: 'CTO Role', label: 'Production AI', gradient: 'from-accent-600 to-primary-600' },
              { value: '6 weeks', label: 'To Validation', gradient: 'from-primary-600 to-accent-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                <div className="text-sm text-neural-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-2 text-neural-500">
              <span className="text-xs uppercase tracking-wider font-semibold">Scroll to explore</span>
              <div className="w-5 h-8 border-2 border-primary-300 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
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
