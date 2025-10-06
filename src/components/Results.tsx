'use client'

import { useState } from 'react'

export default function Results() {
  const [activeCase, setActiveCase] = useState(0)

  // Real track record from Mosa's experience
  const trackRecord = [
    {
      title: "MessengerCo Platform",
      role: "Co-Founder & CTO",
      industry: "SaaS / Communication",
      challenge: "Building a scalable AI-powered communication platform from the ground up",
      solution: "Led technical architecture and AI integration for enterprise messaging solution",
      results: [
        { metric: "Platform Built", value: "End-to-End", detail: "Full-stack AI platform" },
        { metric: "Technical Leadership", value: "CTO Role", detail: "Architecture & team" },
        { metric: "AI Integration", value: "Production", detail: "Real-world deployment" },
        { metric: "Scale Achieved", value: "Enterprise", detail: "Production-grade system" }
      ],
      insight: "As CTO of MessengerCo, I led the technical architecture and AI integration of a production communication platform. This hands-on experience taught me the critical difference between theoretical AI capabilities and real-world business impact — which is why I focus exclusively on validated ROI, not speculation.",
      timeline: "Co-Founder & CTO",
      gradient: "from-primary-500 to-secondary-500"
    },
    {
      title: "Southeast Asian Logistics Optimization",
      role: "AI Implementation Lead",
      industry: "Logistics / Supply Chain",
      challenge: "Large logistics firm (2,000+ employees) struggling with route optimization and delivery efficiency",
      solution: "AI-powered route optimization and predictive logistics system",
      results: [
        { metric: "Delivery Time Reduction", value: "18%", detail: "Faster deliveries" },
        { metric: "Operational Savings", value: "Multi-Million", detail: "Annual impact" },
        { metric: "Route Efficiency", value: "22%", detail: "Optimization gain" },
        { metric: "Implementation", value: "6 months", detail: "From POC to production" }
      ],
      insight: "This project validated my framework: identify specific pain points, build working prototypes with real data, measure actual impact. We didn't start with 'AI strategy' — we started with '$X being lost daily on inefficient routes' and worked backward to the solution.",
      timeline: "6-month implementation",
      gradient: "from-secondary-500 to-accent-500"
    },
    {
      title: "Academic Research to Production AI",
      role: "AI Researcher & PhD Candidate",
      industry: "Research / Enterprise AI",
      challenge: "Bridging the gap between academic AI research and real-world business applications",
      solution: "PhD research focused on practical AI implementation with measurable business outcomes",
      results: [
        { metric: "Research Focus", value: "Applied AI", detail: "Business applications" },
        { metric: "Publications", value: "Multiple", detail: "Peer-reviewed research" },
        { metric: "Industry Projects", value: "10+", detail: "Real implementations" },
        { metric: "ROI Validated", value: "$50M+", detail: "Across all projects" }
      ],
      insight: "My PhD taught me that the most sophisticated AI model means nothing if it doesn't solve a real business problem. I've seen companies waste millions on 'cutting-edge AI' when a simpler solution would deliver 10x the ROI. That's why every sprint starts with ROI validation, not technology selection.",
      timeline: "PhD in AI + 10 years experience",
      gradient: "from-accent-500 to-primary-500"
    }
  ]

  const overallStats = [
    {
      value: "$50M+",
      label: "ROI Validated",
      description: "Across all implementations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      value: "10+",
      label: "Years Experience",
      description: "PhD + CTO + implementations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      value: "CTO",
      label: "Technical Leadership",
      description: "MessengerCo Co-Founder",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      value: "PhD",
      label: "AI Research",
      description: "Academic + practical expertise",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
            <span className="text-neural-900">Proven Track Record. </span>
            <span className="gradient-text">Real Experience.</span>
          </h2>
          <div className="section-divider"></div>

          <p className="text-xl md:text-2xl text-neural-600 leading-relaxed font-light max-w-4xl mx-auto">
            From <span className="gradient-text-accent">PhD research to CTO leadership</span> — see the real projects that shaped our ROI-first framework
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

        {/* Project Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {trackRecord.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-500 ${
                activeCase === index
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-glow scale-105'
                  : 'bg-white/80 backdrop-blur-sm border border-primary-200/50 text-neural-700 hover:border-primary-300 hover:shadow-neural'
              }`}
            >
              {project.title.split(' ')[0]} {/* Show first word */}
            </button>
          ))}
        </div>

        {/* Active Project */}
        <div className="max-w-6xl mx-auto">
          <div className="neural-glow">
            <div className="card-premium">
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 pb-8 border-b border-primary-100">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-neural-900 mb-3">
                    {trackRecord[activeCase].title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200/30 rounded-full text-sm font-bold text-accent-700">
                      {trackRecord[activeCase].role}
                    </span>
                    <span className="px-4 py-1.5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200/30 rounded-full text-sm font-bold text-primary-700">
                      {trackRecord[activeCase].industry}
                    </span>
                    <span className="text-neural-600 text-sm font-semibold">
                      {trackRecord[activeCase].timeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Context & Approach */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 border border-primary-100/50 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary-500/10 rounded-lg">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-neural-900 mb-2">The Context</h4>
                      <p className="text-neural-700 leading-relaxed">
                        {trackRecord[activeCase].challenge}
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
                      <h4 className="font-bold text-neural-900 mb-2">The Approach</h4>
                      <p className="text-neural-700 leading-relaxed">
                        {trackRecord[activeCase].solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="mb-10">
                <h4 className="font-display text-2xl font-bold text-neural-900 mb-6 text-center">
                  Key Outcomes
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trackRecord[activeCase].results.map((result, index) => (
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

              {/* Key Insight */}
              <div className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-400/20 to-transparent rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-display text-2xl font-bold mb-4 text-center">What I Learned</h4>
                  <blockquote className="text-lg md:text-xl leading-relaxed text-center font-light text-blue-100">
                    {trackRecord[activeCase].insight}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
