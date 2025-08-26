'use client'

import Image from 'next/image'

export default function About() {
  const credentials = [
    {
      title: "PhD in Artificial Intelligence",
      institution: "Leading Research University",
      description: "Advanced research in AI systems and practical applications"
    },
    {
      title: "Co-Founder & CTO",
      institution: "MessengerCo",
      description: "Built scalable AI systems for enterprise communication"
    },
    {
      title: "Business Transformation Expert",
      institution: "Unietal Consulting",
      description: "Specialized in SME digital transformation and AI integration"
    }
  ]

  const achievements = [
    "10+ years building AI systems in production",
    "Guided 50+ businesses through digital transformation",
    "Published researcher in top AI conferences",
    "Featured speaker at industry events",
    "Advisor to multiple tech startups"
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Meet Your Sprint Leader
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Experience the difference of working with a true AI expert who understands both technology and business
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl flex items-center justify-center p-12 border-2 border-primary-100">
                  <Image 
                    src="/images/AI_Logo.png" 
                    alt="AI Integration Sprint Leader" 
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">AI PhD</div>
                  <div className="text-sm">& CTO</div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-primary-900 mb-4">
                  Dr. [Your Name]
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I&apos;m a PhD in Artificial Intelligence and Co-Founder & CTO of MessengerCo. 
                  I&apos;ve spent years building advanced systems and guiding digital transformations. 
                  Now, through Unietal, I help SMEs and traditional businesses cut through the AI hype 
                  and use it in practical, profitable ways.
                </p>
              </div>

              {/* Credentials */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-primary-900 mb-4">
                  Professional Background
                </h4>
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-primary-900">
                          {credential.title}
                        </div>
                        <div className="text-accent-600 font-medium">
                          {credential.institution}
                        </div>
                        <div className="text-sm text-gray-600">
                          {credential.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xl font-semibold text-primary-900 mb-4">
                  Key Achievements
                </h4>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-8">
              Featured In & Recognized By
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for logos */}
              <div className="h-12 w-32 bg-gray-300 rounded"></div>
              <div className="h-12 w-32 bg-gray-300 rounded"></div>
              <div className="h-12 w-32 bg-gray-300 rounded"></div>
              <div className="h-12 w-32 bg-gray-300 rounded"></div>
              <div className="h-12 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16">
            <blockquote className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-accent-500 max-w-4xl mx-auto">
              <p className="text-xl italic text-gray-700 leading-relaxed mb-4">
                &quot;I believe AI should empower businesses, not complicate them. That&apos;s why I created 
                the AI Integration Sprint — to give SMEs the same competitive advantages that large 
                corporations have, but in a way that makes sense for their scale and budget.&quot;
              </p>
              <footer className="text-lg font-semibold text-primary-900">
                — Dr. [Your Name], AI Integration Sprint Leader
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}