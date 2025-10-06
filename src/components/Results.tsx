'use client'

import { useState } from 'react'

export default function Results() {
  const [activeCase, setActiveCase] = useState(0)

  const caseStudies = [
    {
      company: "Regional Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Manual quality inspection causing 12% defect rate and $2.1M annual losses",
      solution: "AI-powered visual inspection system with real-time defect detection",
      results: [
        { metric: "Defect Rate Reduction", value: "87%", detail: "From 12% to 1.6%" },
        { metric: "Annual Savings", value: "$1.8M", detail: "Validated in 4-week sprint" },
        { metric: "ROI Timeline", value: "6 months", detail: "Break-even achieved" },
        { metric: "Production Increase", value: "34%", detail: "Through automation" }
      ],
      testimonial: "We identified $2.4M in opportunities we never knew existed. The prototype validated our ROI before we invested a single dollar in full implementation.",
      author: "Marcus Rodriguez",
      role: "CEO",
      timeline: "4-week sprint → 3-month implementation",
      gradient: "from-primary-500 to-secondary-500"
    },
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Customer support costs spiraling at $840K/year with 48-hour response times",
      solution: "AI-powered support automation with intelligent routing and response",
      results: [
        { metric: "Support Cost Reduction", value: "63%", detail: "From $840K to $310K/year" },
        { metric: "Response Time", value: "2 hours", detail: "From 48-hour average" },
        { metric: "Customer Satisfaction", value: "+42%", detail: "CSAT score improvement" },
        { metric: "Team Efficiency", value: "3.2x", detail: "Cases per agent" }
      ],
      testimonial: "Within 3 weeks we had a working AI prototype that cut support costs by 30%. The ROI validation was spot on — we saved $530K in year one.",
      author: "Sarah Chen",
      role: "Operations Director",
      timeline: "4-week sprint → 2-month implementation",
      gradient: "from-secondary-500 to-accent-500"
    },
    {
      company: "Healthcare Network",
      industry: "Healthcare",
      challenge: "Appointment no-shows costing $1.2M annually with 22% no-show rate",
      solution: "AI-driven patient engagement and predictive scheduling system",
      results: [
        { metric: "No-Show Reduction", value: "71%", detail: "From 22% to 6.4%" },
        { metric: "Revenue Recovery", value: "$850K", detail: "Annual validated impact" },
        { metric: "Patient Satisfaction", value: "+38%", detail: "Net Promoter Score" },
        { metric: "Staff Productivity", value: "+27%", detail: "Better scheduling" }
      ],
      testimonial: "The sprint identified three high-ROI opportunities. We implemented the top one and recovered $850K in lost revenue within 8 months.",
      author: "Dr. Jennifer Park",
      role: "Chief Operations Officer",
      timeline: "4-week sprint → 4-month implementation",
      gradient: "from-accent-500 to-primary-500"
    }
  ]

  const overallStats = [
    {
      value: "$50M+",
      label: "Total ROI Identified",
      description: "Across 100+ businesses",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      value: "10-50x",
      label: "Average ROI Multiple",
      description: "Sprint investment to identified opportunities",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      value: "87%",
      label: "Success Rate",
      description: "Projects meeting or exceeding ROI projections",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: "4 weeks",
      label: "Validation Time",
      description: "From discovery to validated ROI",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="results" className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent-400/15 to-primary-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/10 to-primary-500/10 backdrop-blur-sm border border-accent-200/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-accent-700">Proven Results</span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-neural-900">Real Businesses. </span>
            <span className="gradient-text">Real Results.</span>
          </h2>
          <div className="section-divider"></div>

          <p className="text-xl md:text-2xl text-neural-600 leading-relaxed font-light max-w-4xl mx-auto">
            See how businesses like yours <span className="gradient-text-accent">validated $100K–$5M in ROI</span> before committing to full implementation
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {overallStats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group cursor-default"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <div className="text-primary-600 group-hover:text-primary-700 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text font-display">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-neural-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neural-600 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-500 ${
                activeCase === index
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-glow scale-105'
                  : 'bg-white/80 backdrop-blur-sm border border-primary-200/50 text-neural-700 hover:border-primary-300 hover:shadow-neural'
              }`}
            >
              {study.company}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="max-w-6xl mx-auto">
          <div className="neural-glow">
            <div className="card-premium">
              {/* Case Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 pb-8 border-b border-primary-100">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-neural-900 mb-3">
                    {caseStudies[activeCase].company}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200/30 rounded-full text-sm font-bold text-primary-700">
                      {caseStudies[activeCase].industry}
                    </span>
                    <span className="text-neural-600 text-sm font-semibold">
                      {caseStudies[activeCase].timeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gradient-to-br from-red-50/50 to-orange-50/50 border border-red-100/50 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-red-500/10 rounded-lg">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-neural-900 mb-2">The Challenge</h4>
                      <p className="text-neural-700 leading-relaxed">
                        {caseStudies[activeCase].challenge}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent-50/50 to-primary-50/50 border border-accent-100/50 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-accent-500/10 rounded-lg">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-neural-900 mb-2">The Solution</h4>
                      <p className="text-neural-700 leading-relaxed">
                        {caseStudies[activeCase].solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="mb-10">
                <h4 className="font-display text-2xl font-bold text-neural-900 mb-6 text-center">
                  Validated Results
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {caseStudies[activeCase].results.map((result, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden bg-gradient-to-br from-white to-primary-50/30 border border-primary-100/50 rounded-2xl p-6 hover:shadow-glow transition-all duration-500 group"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400/10 to-transparent rounded-bl-3xl"></div>
                      <div className="relative">
                        <div className="text-4xl font-bold mb-2 gradient-text font-display">
                          {result.value}
                        </div>
                        <div className="text-sm font-bold text-neural-900 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-neural-600">
                          {result.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-400/20 to-transparent rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-xl md:text-2xl leading-relaxed mb-6 text-center font-light">
                    &quot;{caseStudies[activeCase].testimonial}&quot;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-bold text-lg mb-1">{caseStudies[activeCase].author}</div>
                    <div className="text-blue-200">{caseStudies[activeCase].role}, {caseStudies[activeCase].company}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
