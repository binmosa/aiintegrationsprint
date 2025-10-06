'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ConsultantShowcase() {
  const [selectedImage, setSelectedImage] = useState(0)

  const experiences = [
    {
      image: '/images/consultant/mosa-1.png',
      title: 'Academic Excellence',
      subtitle: 'University Lectures & Research',
      description: 'Sharing cutting-edge AI research and methodologies with the next generation of technologists',
      stats: 'PhD in AI • Research Publications • Industry Speaking'
    },
    {
      image: '/images/consultant/mosa-2.png',
      title: 'Industry Leadership',
      subtitle: 'CTO & Technical Vision',
      description: 'Leading technical teams and architecting scalable AI solutions for enterprise clients',
      stats: 'MessengerCo CTO • $50M+ ROI Validated • Technical Leadership'
    },
    {
      image: '/images/consultant/mosa-3.png',
      title: 'Business Transformation',
      subtitle: 'Strategic Workshops & Consulting',
      description: 'Guiding startups and SMEs through practical AI implementation and digital transformation',
      stats: 'Unietal Consulting • 100+ Businesses • Hands-on Implementation'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-neural-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="absolute inset-0 bg-neural-pattern opacity-5"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-200/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary-700">Proven Authority • Real Results</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-neural-900">Experience That </span>
              <span className="gradient-text">Delivers Results</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-neural-600 leading-relaxed max-w-4xl mx-auto font-light">
              From academic research to enterprise leadership to hands-on consulting — see the diverse experience behind your <span className="font-semibold gradient-text">AI Integration Sprint</span>
            </p>
          </div>

          {/* Interactive Experience Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Display */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-premium border-2 border-primary-100/50 relative">
                  <Image 
                    src={experiences[selectedImage].image}
                    alt={experiences[selectedImage].title}
                    width={500}
                    height={625}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Image Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                      <h4 className="font-bold text-neural-900 text-lg mb-1">
                        {experiences[selectedImage].title}
                      </h4>
                      <p className="text-primary-600 font-medium text-sm">
                        {experiences[selectedImage].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-6">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === selectedImage 
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 scale-125' 
                          : 'bg-neural-300 hover:bg-neural-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="order-1 lg:order-2 space-y-4">
              {experiences.map((experience, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                    index === selectedImage 
                      ? 'bg-white border-primary-200 shadow-premium' 
                      : 'bg-white/50 border-primary-100/30 hover:bg-white/80 hover:border-primary-200/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      index === selectedImage 
                        ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-glow' 
                        : 'bg-primary-100 text-primary-600 group-hover:bg-primary-200'
                    }`}>
                      {index === 0 && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-2 transition-colors ${
                        index === selectedImage ? 'gradient-text' : 'text-neural-900 group-hover:text-primary-700'
                      }`}>
                        {experience.title}
                      </h4>
                      <p className={`font-medium mb-3 transition-colors ${
                        index === selectedImage ? 'text-accent-600' : 'text-primary-600'
                      }`}>
                        {experience.subtitle}
                      </p>
                      <p className="text-neural-700 leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200/30 rounded-full">
                        <span className="text-xs font-semibold text-primary-700">
                          {experience.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-primary-100/50 shadow-premium max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-neural-900 mb-4">
                Ready to work with proven expertise?
              </h3>
              <p className="text-xl text-neural-600 mb-6 font-light">
                Let&apos;s apply this diverse experience to identify and validate AI opportunities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200/30 rounded-full px-6 py-3">
                  <span className="text-lg font-bold gradient-text">$50M+ in validated opportunities</span>
                </div>
                <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200/30 rounded-full px-6 py-3">
                  <span className="text-lg font-bold text-primary-700">100+ businesses guided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}