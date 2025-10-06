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
      title: "Discover where AI can save you time and money",
      description: "We analyze your specific business processes and identify AI opportunities with measurable financial impact — tailored to your company size and industry.",
      gradient: "from-primary-400 to-secondary-400"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2"/>
          <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      title: "See it work with your actual data",
      description: "You&apos;ll get a functional proof-of-concept built with your data — so you can see the impact before committing to full implementation.",
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
      title: "Get a clear roadmap for your next steps",
      description: "You&apos;ll receive a prioritized implementation plan with projected returns, resource needs, and realistic timelines specific to your business.",
      gradient: "from-accent-400 to-primary-400"
    }
  ]

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <section className="py-32 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 relative overflow-hidden">
      {/* Background Neural Network Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/10 to-primary-500/10 backdrop-blur-sm border border-accent-200/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent-700">The Solution</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
            <span className="text-neural-900">Our Proven </span>
            <span className="gradient-text">ROI Framework</span>
          </h2>

          {/* Call-out box with timeframe */}
          <div className="max-w-3xl mx-auto mb-16 p-8 bg-gradient-to-r from-accent-50 to-primary-50 border-l-4 border-accent-500 rounded-r-xl">
            <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              6 weeks to validated ROI
            </p>
            <p className="text-lg text-neutral-600">
              We systematically de-risk your AI investment with measurable results
            </p>
          </div>
        </div>

        {/* Benefits Breakdown */}
        <h3 className="text-2xl font-bold text-neutral-900 mb-12 text-center">Three Core Deliverables</h3>
        <div className="grid lg:grid-cols-3 gap-10 mb-24">
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

        {/* Call-out box with value proposition */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-10 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                  No risky investments. No theoretical frameworks.
                </p>
                <p className="text-xl text-neutral-600">
                  Just validated ROI opportunities and proven results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
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