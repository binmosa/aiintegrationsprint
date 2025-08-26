'use client'

import { useState } from 'react'

export default function ProcessTimeline() {
  const [activeWeek, setActiveWeek] = useState(1)

  const weeks = [
    {
      week: 1,
      title: "ROI Opportunity Discovery",
      description: "We systematically identify and quantify your highest-value AI opportunities",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
          <circle cx="11" cy="11" r="3" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      gradient: "from-primary-500 to-secondary-500",
      details: [
        "Financial impact analysis of current process inefficiencies",
        "Quantification of time and cost savings potential", 
        "Revenue enhancement opportunity identification",
        "Risk assessment and feasibility scoring for each opportunity"
      ]
    },
    {
      week: 2,
      title: "ROI Validation & Prioritization",
      description: "We validate and rank your top 2-3 opportunities by financial impact and implementation feasibility",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      gradient: "from-secondary-500 to-accent-500",
      details: [
        "Detailed ROI calculations with conservative and optimistic projections",
        "Implementation cost estimates and resource requirements",
        "Risk-adjusted payback period analysis for each opportunity",
        "Market validation and competitive advantage assessment"
      ]
    },
    {
      week: 3,
      title: "ROI Proof-of-Concept",
      description: "We build a working prototype that demonstrates and validates the projected business impact",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2"/>
          <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      gradient: "from-accent-500 to-primary-500",
      details: [
        "Functional prototype demonstrating measurable business impact",
        "Real-world testing with your actual data and workflows",
        "Quantified performance metrics and ROI validation",
        "Scalability assessment and implementation roadmap refinement"
      ]
    },
    {
      week: 4,
      title: "ROI-Focused Implementation Plan",
      description: "We deliver a detailed roadmap with projected returns, investment requirements, and success milestones",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
          <rect x="4" y="4" width="16" height="16" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      gradient: "from-primary-500 to-accent-500",
      details: [
        "Prioritized implementation sequence based on ROI potential",
        "Budget allocation and investment timeline for maximum returns",
        "Risk mitigation strategies and contingency planning",
        "Success metrics, KPIs, and ROI tracking framework"
      ]
    }
  ]

  return (
    <section id="process" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Neural Network Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 right-20 w-72 h-72 bg-gradient-to-br from-primary-400/15 to-secondary-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-accent-400/15 to-primary-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-200/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-700">Our Proven Process</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-neural-900">Our </span>
            <span className="gradient-text">4-Week Process</span>
          </h2>
          <div className="section-divider"></div>
          
          <p className="text-xl md:text-2xl text-neural-600 leading-relaxed font-light max-w-4xl mx-auto">
            A systematic approach to <span className="font-semibold gradient-text">validate and de-risk</span> AI investments before you commit significant resources
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative mb-20">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute top-20 left-0 right-0 h-2 bg-gradient-to-r from-neutral-200 via-primary-100 to-neutral-200 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700 ease-out rounded-full shadow-glow"
                style={{ width: `${(activeWeek / 4) * 100}%` }}
              ></div>
            </div>

            {/* Week markers with premium styling */}
            <div className="grid grid-cols-4 gap-8 mb-16">
              {weeks.map((week, index) => (
                <div 
                  key={week.week}
                  className="text-center cursor-pointer group"
                  onClick={() => setActiveWeek(week.week)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 transform group-hover:scale-110 ${
                    activeWeek >= week.week 
                      ? `bg-gradient-to-br ${week.gradient} text-white shadow-glow` 
                      : 'bg-white/80 backdrop-blur-sm border-2 border-primary-200/50 text-neural-500 hover:border-primary-300 hover:shadow-neural'
                  }`}>
                    {week.icon}
                    <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                      activeWeek >= week.week
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-glow'
                        : 'bg-neural-100 text-neural-600 border border-neural-200'
                    }`}>
                      Week {week.week}
                    </div>
                    
                    {/* Active indicator ring */}
                    {activeWeek === week.week && (
                      <div className="absolute inset-0 rounded-full border-4 border-white/50 animate-pulse"></div>
                    )}
                  </div>
                  
                  <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${
                    activeWeek === week.week 
                      ? 'text-primary-600 transform scale-105' 
                      : 'text-neural-700 group-hover:text-primary-600'
                  }`}>
                    {week.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    activeWeek === week.week
                      ? 'text-neural-600 font-medium'
                      : 'text-neural-500 group-hover:text-neural-600'
                  }`}>
                    {week.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Active week details with premium styling */}
          <div className="relative max-w-5xl mx-auto">
            <div className="neural-glow">
              <div className="card-neural p-12">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className={`p-3 bg-gradient-to-br ${weeks[activeWeek - 1].gradient} rounded-full shadow-glow`}>
                    <div className="text-white">
                      {weeks[activeWeek - 1].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-neural-900 mb-1">
                      {weeks[activeWeek - 1].title}
                    </h3>
                    <p className="text-primary-600 font-medium">Week {activeWeek} Details</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {weeks[activeWeek - 1].details.map((detail, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-primary-100/50 hover:bg-white/70 transition-all duration-300 hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center shadow-neural">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neural-700 leading-relaxed font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline with premium styling */}
        <div className="lg:hidden space-y-12">
          {weeks.map((week, index) => (
            <div 
              key={week.week} 
              className="relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {index < weeks.length - 1 && (
                <div className="absolute left-10 top-24 w-1 h-full bg-gradient-to-b from-primary-300 to-accent-300 rounded-full opacity-30"></div>
              )}
              
              <div className="card-premium">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-br ${week.gradient} rounded-full flex items-center justify-center text-white shadow-glow relative`}>
                      {week.icon}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-neural">
                        Week {week.week}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-neural-900 mb-3 leading-tight">
                      {week.title}
                    </h3>
                    <p className="text-neural-600 mb-6 leading-relaxed">
                      {week.description}
                    </p>
                    
                    <div className="space-y-3">
                      {week.details.map((detail, detailIndex) => (
                        <div 
                          key={detailIndex} 
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary-50/50 to-accent-50/50 rounded-lg border border-primary-100/30"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center shadow-neural">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-neural-700 leading-relaxed font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}