'use client'

import Image from 'next/image'

export default function About() {
  const credentials = [
    {
      title: "PhD in Artificial Intelligence",
      institution: "Leading Research University",
      description: "Advanced research in AI systems and practical applications",
      gradient: "from-primary-500 to-secondary-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Co-Founder & CTO",
      institution: "MessengerCo",
      description: "Built scalable AI systems for enterprise communication",
      gradient: "from-secondary-500 to-accent-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Business Transformation Expert",
      institution: "Unietal Consulting",
      description: "Specialized in SME digital transformation and AI integration",
      gradient: "from-accent-500 to-primary-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  const achievements = [
    { text: "$50M+ in validated ROI opportunities identified", highlight: true },
    { text: "10+ years building AI systems in production", highlight: false },
    { text: "Guided 100+ businesses through digital transformation", highlight: true },
    { text: "Published researcher in top AI conferences", highlight: false },
    { text: "Featured speaker at industry events", highlight: false }
  ]

  const testimonials = [
    {
      quote: "Within 3 weeks we had a working AI prototype that cut support costs by 30%. The ROI validation was spot on.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "TechFlow Solutions",
      savings: "$180K/year"
    },
    {
      quote: "Finally, someone who speaks both AI and business. We identified $2.4M in opportunities we never knew existed.",
      author: "Marcus Rodriguez",
      role: "CEO",
      company: "Regional Manufacturing",
      savings: "$2.4M identified"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Neural Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-5"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-200/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary-700">Led by AI PhD & CTO</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-neural-900">Meet Your </span>
              <span className="gradient-text">Sprint Leader</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-neural-600 leading-relaxed max-w-4xl mx-auto font-light">
              Experience working with a true AI expert who understands both <span className="font-semibold gradient-text">cutting-edge technology</span> and <span className="font-semibold gradient-text">practical business value</span>
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Profile Image & Stats */}
            <div className="order-2 lg:order-1">
              <div className="relative mb-8">
                <div className="aspect-square bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl flex items-center justify-center p-16 border-2 border-primary-100/50 shadow-premium relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"></div>
                  <Image 
                    src="/images/AI_Logo.png" 
                    alt="AI Integration Sprint Leader" 
                    width={300}
                    height={300}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white p-6 rounded-2xl shadow-glow animate-float">
                  <div className="text-2xl font-bold">$50M+</div>
                  <div className="text-sm">ROI Validated</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-6 rounded-2xl shadow-glow animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-2xl font-bold">AI PhD</div>
                  <div className="text-sm">& CTO</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-md border border-primary-100/50 rounded-2xl p-6 text-center shadow-neural hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-sm text-neural-600">Businesses Guided</div>
                </div>
                <div className="bg-white/80 backdrop-blur-md border border-primary-100/50 rounded-2xl p-6 text-center shadow-neural hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-sm text-neural-600">Years in AI</div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-10">
                <h3 className="text-4xl font-bold text-neural-900 mb-6">
                  Dr. [Your Name]
                </h3>
                <div className="text-xl text-neural-600 leading-relaxed mb-8 font-light">
                  <p className="mb-4">
                    I&apos;m a <span className="font-semibold gradient-text">PhD in Artificial Intelligence</span> and <span className="font-semibold gradient-text">Co-Founder & CTO</span> of MessengerCo.
                  </p>
                  <p>
                    I&apos;ve spent over a decade building advanced AI systems and guiding digital transformations. Now, through Unietal, I help SMEs cut through the AI hype and <span className="font-semibold gradient-text">implement solutions that generate real, measurable ROI</span>.
                  </p>
                </div>
              </div>

              {/* Credentials with Icons */}
              <div className="mb-10">
                <h4 className="text-2xl font-semibold text-neural-900 mb-6">
                  Professional Background
                </h4>
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="group flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm border border-primary-100/30 rounded-xl hover:bg-white/80 hover:shadow-neural transition-all duration-300">
                      <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${credential.gradient} rounded-xl text-white shadow-glow group-hover:shadow-glow-lg transition-all duration-300`}>
                        {credential.icon}
                      </div>
                      <div>
                        <div className="font-bold text-neural-900 text-lg group-hover:text-primary-700 transition-colors">
                          {credential.title}
                        </div>
                        <div className="text-accent-600 font-medium mb-1">
                          {credential.institution}
                        </div>
                        <div className="text-neural-600 leading-relaxed">
                          {credential.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-2xl font-semibold text-neural-900 mb-6">
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3"/>
                        </svg>
                      </div>
                      <span className={`${achievement.highlight ? 'font-semibold gradient-text' : 'text-neural-700'} text-lg`}>
                        {achievement.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mb-20">
            <h4 className="text-3xl font-bold text-center text-neural-900 mb-12">
              What Clients Say About the Results
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-md border border-primary-100/50 rounded-2xl p-8 shadow-premium hover:shadow-glow-lg transition-all duration-500 hover:scale-[1.02]">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-neural-900">{testimonial.author}</div>
                      <div className="text-primary-600 font-medium">{testimonial.role}</div>
                      <div className="text-neural-600 text-sm">{testimonial.company}</div>
                    </div>
                    <div className="ml-auto bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200/30 rounded-full px-3 py-1">
                      <span className="text-xs font-bold text-accent-700">{testimonial.savings}</span>
                    </div>
                  </div>
                  <blockquote className="text-neural-700 leading-relaxed italic text-lg">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Quote - Enhanced */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white rounded-3xl p-12 md:p-16 shadow-premium relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-accent-400 to-white rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-white rounded-full flex items-center justify-center shadow-glow">
                    <svg className="w-10 h-10 text-primary-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>
                
                <blockquote className="text-2xl md:text-3xl leading-relaxed mb-8 text-center font-light">
                  &quot;I believe AI should <span className="font-semibold bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent">empower businesses, not complicate them</span>. That&apos;s why I created the AI Integration Sprint — to give SMEs the same competitive advantages that large corporations have, but in a way that <span className="font-semibold bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent">makes financial sense</span> for their scale and budget.&quot;
                </blockquote>
                
                <footer className="text-center">
                  <div className="text-xl font-bold mb-2 text-white">
                    Dr. [Your Name]
                  </div>
                  <div className="text-blue-200">
                    AI Integration Sprint Leader
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}