'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

export default function Deliverables() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const deliverables = [
    {
      icon: "📊",
      title: "AI Readiness Report",
      subtitle: "(where you stand today)",
      description: "A comprehensive assessment of your current capabilities, infrastructure, and AI readiness across all business functions."
    },
    {
      icon: "💡",
      title: "List of opportunities that make sense for your business",
      subtitle: "",
      description: "Prioritized recommendations for AI implementation based on potential ROI, feasibility, and strategic alignment."
    },
    {
      icon: "🚀",
      title: "Prototype demo tailored to your operations",
      subtitle: "",
      description: "A functional demonstration using your actual data and workflows, showing tangible benefits and real-world application."
    },
    {
      icon: "🗓️",
      title: "12-month AI Roadmap designed for SMEs",
      subtitle: "",
      description: "Step-by-step implementation plan with realistic timelines, resource requirements, and budget considerations."
    },
    {
      icon: "👨‍💻",
      title: "Direct access to Dr. [Your Name]",
      subtitle: "— AI PhD, CTO, and business transformation expert",
      description: "Ongoing consultation access to ensure successful implementation and answer questions as you progress."
    }
  ]

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <section id="deliverables" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            What You&apos;ll Walk Away With
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tangible deliverables that provide immediate value and long-term guidance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {deliverables.map((deliverable, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-accent-200"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {deliverable.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2 text-center">
                {deliverable.title}
              </h3>
              {deliverable.subtitle && (
                <p className="text-sm font-medium text-accent-600 mb-4 text-center italic">
                  {deliverable.subtitle}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed text-center">
                {deliverable.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-primary-900 text-white p-8 rounded-2xl mb-8 max-w-4xl">
            <p className="text-2xl font-semibold leading-relaxed mb-4">
              You won&apos;t just get slides — you&apos;ll get clarity, a demo, and a real strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ No Generic Templates</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ No Theoretical Frameworks</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ No Empty Promises</span>
              <span className="bg-accent-500 px-4 py-2 rounded-full">✓ Real, Actionable Results</span>
            </div>
          </div>
          
          <button 
            onClick={handleBookConsultation}
            className="btn-primary text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            Book Your Free Consultation
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