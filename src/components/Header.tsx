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

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-primary-100'
          : 'bg-white/90 backdrop-blur-md border-b border-primary-100/50'
      }`}>
        <div className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/images/AI_Logo.png"
                alt="AI Integration Sprint"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="ml-3">
                <h1 className="font-bold text-neutral-900 text-lg md:text-xl">
                  AI Integration Sprint
                </h1>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('results')}
                className="text-neural-600 hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-neural-600 hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neural-600 hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-neural-600 hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
              >
                Pricing
              </button>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-sm"
              >
                Book Free Call
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className="bg-white border-b border-neutral-200 shadow-md">
            <nav className="container-custom py-4 flex flex-col gap-1">
              <button
                onClick={() => scrollToSection('results')}
                className="px-4 py-3 text-left text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200 font-medium"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="px-4 py-3 text-left text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200 font-medium"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-3 text-left text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-3 text-left text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200 font-medium"
              >
                Pricing
              </button>
              <div className="h-px bg-neutral-200 my-2"></div>
              <div className="px-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsBookingModalOpen(true)
                  }}
                  className="btn-primary w-full text-sm"
                >
                  Book Free Consultation
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-neutral-900/20 z-40 transition-opacity duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  )
}