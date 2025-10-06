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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-luxury border-b border-primary-100/50'
          : 'bg-white/80 backdrop-blur-lg shadow-premium border-b border-white/20'
      }`}>
        <div className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative">
                <Image
                  src="/images/AI_Logo.png"
                  alt="AI Integration Sprint"
                  width={48}
                  height={48}
                  className={`transition-all duration-300 ${isScrolled ? 'h-9 w-9' : 'h-11 w-11'} md:${isScrolled ? 'h-10 w-10' : 'h-12 w-12'} w-auto`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/20 group-hover:to-secondary-400/20 rounded-full transition-all duration-300"></div>
              </div>
              <div className="ml-3">
                <h1 className={`font-display font-bold text-neural-900 transition-all duration-300 ${
                  isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                }`}>
                  AI Integration Sprint
                </h1>
                <p className="text-xs text-primary-600 font-semibold hidden sm:block">Validate ROI in 4 Weeks</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('results')}
                className="nav-link text-neural-700 hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
              >
                Results
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="nav-link text-neural-700 hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
              >
                Process
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link text-neural-700 hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="nav-link text-neural-700 hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="w-px h-6 bg-neural-200"></div>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-[1.02] hover:-translate-y-0.5 text-sm"
              >
                <span className="relative z-10">Book Free Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-primary-50 transition-all duration-300 border border-primary-100/50"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-neural-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Improved */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/98 backdrop-blur-xl border-b border-primary-100/50 shadow-luxury">
            <nav className="container-custom py-6 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('results')}
                className="group px-6 py-4 text-left text-neural-700 hover:bg-primary-50/80 rounded-xl transition-all duration-300 font-semibold"
              >
                <div className="flex items-center justify-between">
                  <span>Results</span>
                  <svg className="w-5 h-5 text-primary-500 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="group px-6 py-4 text-left text-neural-700 hover:bg-primary-50/80 rounded-xl transition-all duration-300 font-semibold"
              >
                <div className="flex items-center justify-between">
                  <span>Process</span>
                  <svg className="w-5 h-5 text-primary-500 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="group px-6 py-4 text-left text-neural-700 hover:bg-primary-50/80 rounded-xl transition-all duration-300 font-semibold"
              >
                <div className="flex items-center justify-between">
                  <span>About</span>
                  <svg className="w-5 h-5 text-primary-500 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="group px-6 py-4 text-left text-neural-700 hover:bg-primary-50/80 rounded-xl transition-all duration-300 font-semibold"
              >
                <div className="flex items-center justify-between">
                  <span>Pricing</span>
                  <svg className="w-5 h-5 text-primary-500 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent my-2"></div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsBookingModalOpen(true)
                }}
                className="mx-6 mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4 px-6 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 text-center"
              >
                Book Free Consultation
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-neural-900/50 backdrop-blur-sm z-40 transition-opacity duration-300"
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