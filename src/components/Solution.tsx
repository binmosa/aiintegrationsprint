'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

export default function Solution() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const benefits = [
    {
      icon: "🔍",
      title: "Discover where AI can save time and reduce costs in your business",
      description: "We identify specific processes and workflows where AI can make a measurable impact on your bottom line."
    },
    {
      icon: "🛠️",
      title: "Build a prototype demo to see it in action",
      description: "You'll see a working demonstration with your actual data, not just theoretical presentations or mock-ups."
    },
    {
      icon: "🗺️",
      title: "Walk away with a clear 12-month roadmap to move forward",
      description: "Get a step-by-step implementation plan designed specifically for SMEs, with realistic timelines and budgets."
    }
  ]

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 60 60" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="solution-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor"/>
              <circle cx="0" cy="0" r="1" fill="currentColor"/>
              <circle cx="60" cy="60" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solution-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The AI Integration Sprint
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            In just 4 weeks, we help you:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 leading-tight text-center">
                {benefit.title}
              </h3>
              <p className="text-blue-100 leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-accent-500/20 border border-accent-400/30 p-8 rounded-2xl mb-8 max-w-3xl">
            <p className="text-2xl font-semibold leading-relaxed">
              No endless workshops. No hype. Just clarity, prototypes, and results.
            </p>
          </div>
          
          <button 
            onClick={handleBookConsultation}
            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-10 rounded-lg transition-colors duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
          >
            See If Your Business Qualifies
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl"></div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  )
}