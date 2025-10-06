'use client'

export default function TrustIndicators() {
  const trustMetrics = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "PhD in AI",
      description: "Led by Dr. Mosa Alsawadi with advanced AI research background"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "CTO Experience",
      description: "Co-Founder & CTO of MessengerCo with proven technical leadership"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "$50M+ ROI Validated",
      description: "Identified and quantified opportunities across 100+ businesses"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "10+ Years Experience",
      description: "Building production AI systems that generate measurable business value"
    }
  ]

  const clientLogos = [
    { name: "Manufacturing", width: "w-24" },
    { name: "Healthcare", width: "w-28" },
    { name: "SaaS", width: "w-26" },
    { name: "Retail", width: "w-22" },
    { name: "Finance", width: "w-24" }
  ]

  const socialProof = [
    {
      stat: "10+ years",
      label: "AI Experience",
      subtext: "From academic research to production systems"
    },
    {
      stat: "PhD + CTO",
      label: "Real Expertise",
      subtext: "Not generalist consultants"
    },
    {
      stat: "$9,500",
      label: "Fixed Price",
      subtext: "No hidden costs or scope creep"
    },
    {
      stat: "6 weeks",
      label: "Fast Validation",
      subtext: "Proof before major commitment"
    }
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-white"></div>
      <div className="absolute inset-0 bg-neural-pattern opacity-5"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/10 to-primary-500/10 backdrop-blur-sm border border-accent-200/30 rounded-full mb-8">
            <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold text-accent-700">Trusted by Leading Businesses</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-neural-900 mb-6">
            Why Businesses Trust Our Framework
          </h2>
          <p className="text-lg md:text-xl text-neural-600 leading-relaxed font-light">
            Proven expertise. Validated results. Transparent methodology.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-primary-100/50 rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <div className="text-primary-600 group-hover:text-primary-700 transition-colors">
                    {metric.icon}
                  </div>
                </div>
                <h3 className="font-bold text-neural-900 text-lg mb-2 group-hover:text-primary-700 transition-colors">
                  {metric.title}
                </h3>
                <p className="text-sm text-neural-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="neural-glow mb-16">
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 rounded-3xl p-12 md:p-16 shadow-luxury relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-accent-400 to-white rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Track Record of Success
                </h3>
                <p className="text-blue-100 text-lg">
                  Numbers that demonstrate our commitment to validated, measurable outcomes
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {socialProof.map((proof, index) => (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    <div className="relative mb-4">
                      <div className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                        {proof.stat}
                      </div>
                    </div>
                    <div className="font-bold text-white text-lg mb-2">
                      {proof.label}
                    </div>
                    <div className="text-blue-200 text-sm leading-relaxed">
                      {proof.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Industries */}
        <div className="text-center">
          <p className="text-sm text-neutral-500 uppercase tracking-wider font-bold mb-12">
            Serving Businesses Across Industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {/* Manufacturing */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl flex items-center justify-center group-hover:from-primary-500/20 group-hover:to-primary-600/20 transition-all duration-300">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-700">Manufacturing</span>
            </div>

            {/* Healthcare */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500/10 to-accent-600/10 rounded-xl flex items-center justify-center group-hover:from-accent-500/20 group-hover:to-accent-600/20 transition-all duration-300">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-700">Healthcare</span>
            </div>

            {/* Retail */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/10 to-secondary-600/10 rounded-xl flex items-center justify-center group-hover:from-secondary-500/20 group-hover:to-secondary-600/20 transition-all duration-300">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-700">Retail</span>
            </div>

            {/* Finance */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600/10 to-secondary-500/10 rounded-xl flex items-center justify-center group-hover:from-primary-600/20 group-hover:to-secondary-500/20 transition-all duration-300">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-700">Finance</span>
            </div>

            {/* Logistics */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-600/10 to-primary-500/10 rounded-xl flex items-center justify-center group-hover:from-accent-600/20 group-hover:to-primary-500/20 transition-all duration-300">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-700">Logistics</span>
            </div>

            {/* SaaS / Tech */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-600/10 to-accent-500/10 rounded-xl flex items-center justify-center group-hover:from-secondary-600/20 group-hover:to-accent-500/20 transition-all duration-300">
                <svg className="w-8 h-8 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-700">SaaS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
