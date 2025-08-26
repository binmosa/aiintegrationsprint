'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModal'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-primary-100/30' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image 
              src="/images/AI_Logo.png" 
              alt="AI Integration Sprint" 
              width={48}
              height={48}
              className="h-10 md:h-12 w-auto"
            />
            <h1 className="text-xl md:text-2xl font-bold text-primary-900 ml-3">
              AI Integration Sprint
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('deliverables')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="btn-primary text-sm"
            >
              Book Free Consultation
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-t border-primary-100/30 shadow-lg">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('deliverables')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
              >
                Contact
              </button>
              <div className="px-6 py-3">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="btn-primary w-full text-sm"
                >
                  Book Free Consultation
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </header>
  )
}