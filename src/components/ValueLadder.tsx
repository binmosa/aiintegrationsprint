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
      description: "You'll walk away with 3-5 specific AI opportunity ideas tailored to your business, plus clarity on whether AI is worth pursuing now",
      features: [
        "Get 3-5 specific AI ideas for your business",
        "Understand where you could save time & money",
        "Learn if your data is ready (or what to fix)",
        "No obligation — honest assessment of fit"
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
      duration: "6 weeks",
      description: "Validate AI opportunities for your business before committing to major implementation — get proof, not promises",
      features: [
        "Systematic discovery of AI opportunities in your workflows",
        "Financial impact analysis tailored to your business size",
        "Working prototype built with your actual data",
        "Conservative & optimistic ROI projections",
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
    <section id="pricing" className="py-32 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-200/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-primary-700">Your Path to AI Success</span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold mb-12 leading-tight">
            <span className="text-neural-900">Start Risk-Free. </span>
            <span className="gradient-text">Scale With Confidence.</span>
          </h2>

          {/* Value Anchoring */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-accent-50 to-primary-50 border-2 border-accent-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <p className="text-sm font-bold text-accent-700 uppercase tracking-wide mb-2">Typical Return on Investment</p>
                <p className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3">
                  10×–50× ROI Multiple
                </p>
                <p className="text-lg text-neutral-600">
                  Most clients uncover opportunities worth 10×–50× the Sprint investment
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/60 rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary-600 mb-1">$1,583</p>
                  <p className="text-sm text-neutral-600">per week over 6 weeks</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary-600 mb-1">&lt; 1 Month</p>
                  <p className="text-sm text-neutral-600">cost of 1 data scientist</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary-600 mb-1">Limited</p>
                  <p className="text-sm text-neutral-600">Only 8 sprints per quarter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost of Inaction */}
          <div className="max-w-3xl mx-auto mb-16 p-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-xl">
            <p className="text-lg font-bold text-neutral-900 mb-2">
              What does AI uncertainty cost you each month?
            </p>
            <p className="text-neutral-700">
              Every month without clarity could mean missed cost savings, lost revenue opportunities, or competitive disadvantage. The Sprint is the smallest safe way to explore AI — without burning $50K–$250K on failed projects.
            </p>
          </div>
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
                      <p className="text-sm text-neutral-600 font-semibold mb-1">
                        {step.duration}
                      </p>
                      {step.highlight && (
                        <p className="text-xs text-primary-600 font-medium">
                          ~$1,583/week • 2 payment installments available
                        </p>
                      )}
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
                      <p className="text-sm text-neutral-600 font-semibold mb-1">
                        {step.duration}
                      </p>
                      {step.highlight && (
                        <p className="text-xs text-primary-600 font-medium">
                          ~$1,583/week • 2 payment installments available
                        </p>
                      )}
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

        {/* Why This Pricing Model */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border border-neutral-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Why a Sprint vs. Traditional Consulting?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-primary-600 mb-3">⚡ Speed</h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  In just <strong>6 weeks</strong>, your leadership team has clarity on AI ROI. No drawn-out six-figure consulting contracts that take months.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-primary-600 mb-3">🎯 Focused Scope</h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  This is a <strong>pilot engagement</strong> designed to validate opportunities before major investment. It naturally leads to bigger implementation projects where real enterprise spend happens.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-primary-600 mb-3">💎 Limited Availability</h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Only <strong>8 sprints per quarter</strong> to ensure quality and personalized attention. This isn&apos;t a mass-market service.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-primary-600 mb-3">💰 Risk-Adjusted</h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  <strong>10×–50× ROI typical</strong> means the Sprint pays for itself many times over. Compare that to $50K–$250K wasted on failed AI projects.
                </p>
              </div>
            </div>
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
