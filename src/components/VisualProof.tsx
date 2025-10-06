'use client'

import Image from 'next/image'

export default function VisualProof() {
  const caseStudies = [
    {
      industry: "Logistics",
      company: "Southeast Asian Logistics Firm",
      employees: "2,000+ employees",
      challenge: "Manual route planning causing delays and high costs",
      before: {
        deliveryTime: "5-7 days",
        accuracy: "82%",
        costs: "Baseline"
      },
      after: {
        deliveryTime: "4-5 days",
        accuracy: "96%",
        costs: "18% reduction"
      },
      impact: "Multi-million dollar annual savings"
    },
    {
      industry: "SaaS",
      company: "MessengerCo Platform",
      role: "Co-Founder & CTO",
      challenge: "Building AI-powered communication platform from ground up",
      before: {
        platform: "Concept",
        aiIntegration: "None",
        users: "0"
      },
      after: {
        platform: "Production",
        aiIntegration: "Full-stack",
        users: "Active user base"
      },
      impact: "End-to-end AI platform serving real customers"
    },
    {
      industry: "Manufacturing",
      company: "Academic Research → Production",
      role: "PhD Research Applied",
      challenge: "Translating theoretical AI into business applications",
      before: {
        approach: "Research-only",
        validation: "Academic",
        deployment: "None"
      },
      after: {
        approach: "Business-focused",
        validation: "ROI-driven",
        deployment: "Production systems"
      },
      impact: "$50M+ in validated ROI opportunities identified"
    }
  ]

  return (
    <section id="visual-proof" className="py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-200/30 rounded-full mb-4">
            <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-accent-700">Real Projects. Real Results.</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Before & After: The Numbers Speak
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            See the concrete impact of strategic AI implementation across different industries
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-8 py-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                      {study.company}
                    </h3>
                    <p className="text-neutral-600">
                      {study.employees || study.role}
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white/60 border border-primary-200/50 rounded-lg">
                  <p className="text-sm font-semibold text-neutral-700 mb-1">Challenge:</p>
                  <p className="text-neutral-600">{study.challenge}</p>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-neutral-900">Before</h4>
                    </div>
                    {Object.entries(study.before).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-wide font-semibold text-neutral-500 mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-lg font-bold text-neutral-700">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* After */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-neutral-900">After</h4>
                    </div>
                    {Object.entries(study.after).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3 p-4 bg-gradient-to-br from-accent-50 to-primary-50 border border-accent-200/30 rounded-lg">
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-wide font-semibold text-accent-700 mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-lg font-bold text-neutral-900">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold opacity-90 mb-1">Bottom Line Impact</p>
                      <p className="text-xl font-bold">{study.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
            <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <p className="font-bold text-neutral-900">100% Authentic Results</p>
              <p className="text-sm text-neutral-600">Every metric is from real projects I&apos;ve led or contributed to</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
