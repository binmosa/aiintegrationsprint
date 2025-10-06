'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

export default function ValueLadder() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const valueSteps = [
    {
      level: 1,
      title: "Free Consultation",
      subtitle: "Opportunity Assessment",
      value: "$0",
      duration: "30 minutes",
      description: "Discover if AI can transform your business operations",
      features: [
        "Business process analysis",
        "Initial AI opportunity identification",
        "ROI potential discussion",
        "Sprint eligibility assessment"
      ],
      cta: "Book Free Call",
      highlight: false,
      gradient: "from-neural-100 to-primary-50",
      borderColor: "border-primary-200",
      action: () => { /* handled by parent */ }
    },
    {
      level: 2,
      title: "AI Integration Sprint",
      subtitle: "ROI Validation Package",
      value: "$9,500",
      duration: "4 weeks",
      description: "Validate $100K–$5M in AI opportunities before major investment",
      features: [
        "Systematic ROI opportunity discovery",
        "Financial impact quantification ($100K–$5M range)",
        "Working prototype with your data",
        "Validated ROI projections & risk assessment",
        "12-month implementation roadmap",
        "Direct access to AI PhD & CTO"
      ],
      cta: "Start Your Sprint",
      highlight: true,
      gradient: "from-primary-600 to-secondary-600",
      borderColor: "border-primary-500",
      badge: "Most Popular"
    },
    {
      level: 3,
      title: "Full Implementation",
      subtitle: "End-to-End AI Solution",
      value: "Custom",
      duration: "3-12 months",
      description: "Complete AI system development and deployment based on validated sprint results",
      features: [
        "Production-ready AI system development",
        "Integration with existing infrastructure",
        "Team training & knowledge transfer",
        "Ongoing optimization & support",
        "Performance monitoring & reporting",
        "Guaranteed ROI milestones"
      ],
      cta: "Discuss Implementation",
      highlight: false,
      gradient: "from-accent-500 to-primary-600",
      borderColor: "border-accent-300"
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-400/15 to-secondary-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-200/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-primary-700">Your Path to AI Success</span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-neural-900">Start Risk-Free. </span>
            <span className="gradient-text">Scale With Confidence.</span>
          </h2>
          <div className="section-divider"></div>

          <p className="text-xl md:text-2xl text-neural-600 leading-relaxed font-light max-w-4xl mx-auto">
            Our proven framework takes you from <span className="gradient-text-accent">free discovery to validated ROI</span> to full implementation — at your pace
          </p>
        </div>

        {/* Value Ladder Visualization */}
        <div className="max-w-7xl mx-auto mb-16">
          {/* Desktop: Horizontal Ladder */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 opacity-30 -z-10"></div>

            {valueSteps.map((step, index) => (
              <div
                key={index}
                className={`relative ${step.level === 2 ? 'lg:-mt-8' : ''}`}
              >
                {/* Badge */}
                {step.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-glow whitespace-nowrap">
                      {step.badge}
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full ${
                  step.highlight
                    ? 'neural-glow'
                    : ''
                }`}>
                  <div className={`h-full flex flex-col bg-white/90 backdrop-blur-xl border-2 ${step.borderColor} rounded-3xl p-8 shadow-premium hover:shadow-luxury transition-all duration-500 ${
                    step.highlight
                      ? 'border-primary-500 shadow-glow'
                      : 'hover:border-primary-300'
                  }`}>
                    {/* Level Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${
                        step.highlight
                          ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-glow'
                          : 'bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-700'
                      } flex items-center justify-center font-bold text-lg`}>
                        {step.level}
                      </div>
                    </div>

                    {/* Title & Price */}
                    <div className="mb-6">
                      <h3 className="font-display text-2xl font-bold text-neural-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-4">
                        {step.subtitle}
                      </p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className={`font-display text-4xl font-bold ${
                          step.highlight ? 'gradient-text' : 'text-neural-900'
                        }`}>
                          {step.value}
                        </span>
                        {step.value !== "Custom" && step.value !== "$0" && (
                          <span className="text-neural-600 text-sm">one-time</span>
                        )}
                      </div>
                      <p className="text-sm text-neural-600 font-semibold">
                        {step.duration}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-neural-700 leading-relaxed mb-6 flex-grow">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {step.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                            step.highlight
                              ? 'bg-gradient-to-r from-accent-500 to-accent-600'
                              : 'bg-primary-100'
                          } flex items-center justify-center mt-0.5`}>
                            <svg className={`w-3 h-3 ${step.highlight ? 'text-white' : 'text-primary-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className={`text-sm ${
                            step.highlight ? 'font-semibold text-neural-800' : 'text-neural-700'
                          } leading-relaxed`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-500 ${
                        step.highlight
                          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-glow hover:shadow-glow-lg transform hover:scale-[1.02]'
                          : 'bg-white border-2 border-primary-300 text-primary-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 shadow-neural'
                      }`}
                    >
                      {step.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="lg:hidden space-y-8">
            {valueSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Badge */}
                {step.badge && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-glow">
                      {step.badge}
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative ${step.highlight ? 'neural-glow' : ''}`}>
                  <div className={`bg-white/90 backdrop-blur-xl border-2 ${step.borderColor} rounded-3xl p-8 shadow-premium ${
                    step.highlight ? 'border-primary-500 shadow-glow' : ''
                  }`}>
                    {/* Content (same as desktop) */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${
                        step.highlight
                          ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-glow'
                          : 'bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-700'
                      } flex items-center justify-center font-bold text-lg`}>
                        {step.level}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-display text-2xl font-bold text-neural-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-4">
                        {step.subtitle}
                      </p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className={`font-display text-4xl font-bold ${
                          step.highlight ? 'gradient-text' : 'text-neural-900'
                        }`}>
                          {step.value}
                        </span>
                        {step.value !== "Custom" && step.value !== "$0" && (
                          <span className="text-neural-600 text-sm">one-time</span>
                        )}
                      </div>
                      <p className="text-sm text-neural-600 font-semibold">
                        {step.duration}
                      </p>
                    </div>

                    <p className="text-neural-700 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {step.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                            step.highlight
                              ? 'bg-gradient-to-r from-accent-500 to-accent-600'
                              : 'bg-primary-100'
                          } flex items-center justify-center mt-0.5`}>
                            <svg className={`w-3 h-3 ${step.highlight ? 'text-white' : 'text-primary-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className={`text-sm ${
                            step.highlight ? 'font-semibold text-neural-800' : 'text-neural-700'
                          } leading-relaxed`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-500 ${
                        step.highlight
                          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-glow hover:shadow-glow-lg'
                          : 'bg-white border-2 border-primary-300 text-primary-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 shadow-neural'
                      }`}
                    >
                      {step.cta}
                    </button>
                  </div>
                </div>

                {/* Connection Arrow (mobile) */}
                {index < valueSteps.length - 1 && (
                  <div className="flex justify-center py-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-primary-300 to-secondary-300 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white rounded-3xl p-12 shadow-luxury relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-400 to-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h3 className="font-display text-3xl font-bold mb-4">
                Ready to Discover Your AI Opportunities?
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Start with a free consultation. No commitment, no pressure — just honest assessment of whether AI can transform your business.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-5 px-12 rounded-2xl shadow-glow-lg hover:shadow-glow transition-all duration-500 transform hover:scale-105"
              >
                Book Your Free Consultation
              </button>
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
