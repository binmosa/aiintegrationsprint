'use client'

// McKinsey-inspired Situation-Complication-Resolution Framework
export default function ProblemStatement() {
  // Situation: Current state of AI adoption
  const painPoints = [
    {
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      title: "Millions wasted on AI projects with no measurable ROI",
      description: "Companies spend 6-12 months and $500K+ on AI initiatives that never deliver the promised business value.",
      gradient: "from-red-400 to-orange-400"
    },
    {
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16V8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      title: "High-risk investments without validation",
      description: "Leadership makes AI decisions based on vendor pitches and industry hype instead of validated business cases.",
      gradient: "from-amber-400 to-yellow-400"
    },
    {
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
          <rect x="4" y="4" width="16" height="16" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      title: "Analysis paralysis prevents action",
      description: "Teams get stuck in endless planning cycles while competitors gain market advantage with AI implementations.",
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
          <path d="M8 8l8 8" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
          <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.2"/>
        </svg>
      ),
      title: "No framework to prioritize opportunities",
      description: "Without systematic evaluation, businesses pursue the loudest AI opportunity instead of the most profitable one.",
      gradient: "from-purple-400 to-pink-400"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-200/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-red-700">Common AI Implementation Challenges</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-neural-900">Why </span>
            <span className="gradient-text">AI Investments Fail</span>
          </h2>
          <div className="section-divider"></div>

          <p className="text-xl md:text-2xl text-neural-600 leading-relaxed font-light max-w-4xl mx-auto">
            <span className="font-bold gradient-text-accent">87% of AI projects fail</span> to deliver measurable ROI. Without a proven framework,
            businesses waste time and money on the wrong opportunities:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group card-premium hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${point.gradient} rounded-2xl shadow-neural group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-white">
                    {point.iconSvg}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neural-900 mb-4 leading-tight group-hover:text-primary-700 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-neural-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resolution Tease - McKinsey Framework */}
        <div className="text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="neural-glow">
              <div className="card-neural p-16 text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center shadow-glow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-bold text-neural-900 mb-6 leading-tight">
                  AI investments shouldn&apos;t be risky.
                </h3>
                <p className="text-xl md:text-2xl text-neural-700 font-light leading-relaxed mb-8">
                  They should deliver <span className="gradient-text-accent">validated, measurable ROI</span>.
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200/30 rounded-full">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold text-accent-700">That&apos;s where our proven framework comes in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}