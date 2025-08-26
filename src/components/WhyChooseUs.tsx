'use client'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.8 3.4 14.4 3.4 14.2 3.5L13 4.2C12.8 4.3 12.6 4.5 12.6 4.7S12.8 5.1 13 5.2L15 6.2V7H9V9C9 9.6 9.4 10 10 10H11V11.5L8.5 13C8.1 13.2 7.9 13.7 8.1 14.1C8.2 14.4 8.5 14.6 8.9 14.6C9 14.6 9.1 14.6 9.2 14.5L12 13L14.8 14.5C15.1 14.6 15.5 14.5 15.7 14.1C15.9 13.7 15.7 13.2 15.3 13L12.9 11.5V10H14C14.6 10 15 9.6 15 9V7.5L17.2 8.7C17.6 8.9 18.1 8.7 18.3 8.3C18.4 8.1 18.4 7.9 18.3 7.7L21 9Z" fill="currentColor" opacity="0.3"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "$50M+ in validated ROI opportunities identified for clients",
      description: "We don't speak in technical abstractions — we quantify business impact in dollars, timeframes, and competitive advantages.",
      gradient: "from-primary-500 to-secondary-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <rect x="2" y="2" width="20" height="20" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      title: "Proven framework that de-risks AI investments before you spend $500K+",
      description: "Every client receives validated ROI projections, working prototypes, and risk-assessed implementation plans — not theoretical consulting.",
      gradient: "from-secondary-500 to-accent-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="7" r="2" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      title: "Led by PhD in AI & CTO with hands-on enterprise implementation experience",
      description: "Dr. [Your Name], AI PhD and Co-Founder & CTO, has built AI systems that generated millions in value — not just research papers.",
      gradient: "from-accent-500 to-primary-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M3 21h18l-9-18-9 18z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 9v4" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      title: "SME-focused approach that levels the playing field against Fortune 500 competitors",
      description: "We specialize in identifying AI opportunities that give smaller businesses disproportionate competitive advantages with realistic budgets.",
      gradient: "from-primary-500 to-accent-500"
    }
  ]

  const stats = [
    { number: "$50M+", label: "ROI Identified", description: "Validated opportunities", gradient: "from-primary-500 to-secondary-500" },
    { number: "10-50x", label: "ROI Multiple", description: "Average client outcome", gradient: "from-secondary-500 to-accent-500" },
    { number: "87%", label: "Risk Reduction", description: "vs unvalidated AI projects", gradient: "from-accent-500 to-primary-500" },
    { number: "4", label: "Week Validation", description: "Before major investment", gradient: "from-primary-500 to-accent-500" }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-accent-400 to-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="whychoose-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path d="M100,400 Q300,300 500,450 T900,400" stroke="url(#whychoose-gradient)" strokeWidth="1" fill="none" className="animate-pulse" />
          <path d="M150,600 Q400,500 650,650 T950,600" stroke="url(#whychoose-gradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="300" cy="350" r="3" fill="#ffffff" className="animate-pulse opacity-60" />
          <circle cx="700" cy="450" r="4" fill="#22c55e" className="animate-pulse opacity-70" style={{animationDelay: '0.5s'}} />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/20 to-white/10 backdrop-blur-sm border border-accent-400/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent-300">Proven Track Record</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Why Choose Our </span>
            <span className="bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent">ROI Framework</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light max-w-4xl mx-auto">
            We don't deliver consulting reports — we deliver <span className="font-semibold bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent">validated ROI opportunities</span> worth $100K–$5M+
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-accent-400/20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="font-bold text-white mb-2 text-lg group-hover:text-accent-200 transition-colors">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`p-4 bg-gradient-to-br ${benefit.gradient} rounded-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-accent-200 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Advantage */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white/20 to-accent-400/20 backdrop-blur-md border border-white/30 rounded-2xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-white rounded-full flex items-center justify-center shadow-glow">
                <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Bottom Line
            </h3>
            <div className="space-y-4 text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
              <p className="font-light">
                While other consultants give you <span className="text-red-300 line-through">reports to read</span>, 
                we give you <span className="font-semibold text-accent-200">prototypes to test</span>.
              </p>
              <p className="font-light">
                While they provide <span className="text-red-300 line-through">theories</span>, 
                we deliver <span className="font-semibold text-accent-200">validated ROI projections</span>.
              </p>
              <p className="font-light">
                While they talk about <span className="text-red-300 line-through">AI's potential</span>, 
                we show you <span className="font-semibold text-accent-200">exactly how much money you'll make</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}