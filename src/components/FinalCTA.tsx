'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

export default function FinalCTA() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to See What AI Can Do for Your Business?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Don&apos;t waste months stuck in research or hype. In just 4 weeks, you&apos;ll have clarity, 
            a working demo, and a roadmap designed for your business.
          </p>

          <button 
            onClick={handleBookConsultation}
            className="bg-accent-500 hover:bg-accent-400 text-white font-bold py-6 px-12 rounded-xl text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200"
          >
            Book Your Free 30-Min Consultation
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