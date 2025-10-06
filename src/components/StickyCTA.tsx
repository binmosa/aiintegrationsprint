'use client'

import { useState, useEffect } from 'react'
import BookingModal from './BookingModal'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 800px (past hero section)
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-primary-200 shadow-lg">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
              <div className="text-center sm:text-left">
                <p className="font-bold text-neutral-900 text-lg">
                  Ready to Validate Your AI ROI?
                </p>
                <p className="text-sm text-neutral-600">
                  Get a free 30-minute consultation • $0 commitment
                </p>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Book Free Call
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
    </>
  )
}
