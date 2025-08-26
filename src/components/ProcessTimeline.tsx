'use client'

import { useState } from 'react'

export default function ProcessTimeline() {
  const [activeWeek, setActiveWeek] = useState(1)

  const weeks = [
    {
      week: 1,
      title: "Business Assessment",
      description: "We learn your processes, pain points, and goals",
      icon: "🔍",
      details: [
        "Deep-dive analysis of your current workflows",
        "Identification of repetitive tasks and bottlenecks", 
        "Understanding of your business objectives and constraints",
        "Assessment of your team's technical capabilities"
      ]
    },
    {
      week: 2,
      title: "Opportunity Mapping",
      description: "We identify 2–3 practical areas where AI can make a measurable difference",
      icon: "🎯",
      details: [
        "Prioritization of AI opportunities based on ROI potential",
        "Technical feasibility assessment for each opportunity",
        "Cost-benefit analysis with realistic implementation timelines",
        "Risk assessment and mitigation strategies"
      ]
    },
    {
      week: 3,
      title: "Prototyping",
      description: "We build a simple working demo with your data — so you can see the impact",
      icon: "🛠️",
      details: [
        "Development of a functional prototype using your actual data",
        "Integration testing with your existing systems",
        "Performance benchmarking and impact measurement",
        "User experience design and feedback collection"
      ]
    },
    {
      week: 4,
      title: "Roadmap",
      description: "We deliver a 12-month plan that shows exactly how to move forward",
      icon: "🗺️",
      details: [
        "Detailed implementation roadmap with milestones",
        "Technology stack recommendations and vendor evaluation",
        "Team training and change management strategies",
        "Success metrics and KPIs for measuring progress"
      ]
    }
  ]

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Our 4-Week Process
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A systematic approach to AI integration that delivers real results
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gray-200">
              <div 
                className="h-full bg-accent-500 transition-all duration-700 ease-out"
                style={{ width: `${(activeWeek / 4) * 100}%` }}
              ></div>
            </div>

            {/* Week markers */}
            <div className="grid grid-cols-4 gap-8 mb-16">
              {weeks.map((week) => (
                <div 
                  key={week.week}
                  className="text-center cursor-pointer"
                  onClick={() => setActiveWeek(week.week)}
                >
                  <div className={`relative mx-auto w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-300 ${
                    activeWeek >= week.week 
                      ? 'bg-accent-500 text-white shadow-lg' 
                      : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                  }`}>
                    {week.icon}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary-900 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Week {week.week}
                    </div>
                  </div>
                  <h3 className={`font-semibold text-lg mb-2 transition-colors ${
                    activeWeek === week.week ? 'text-accent-600' : 'text-gray-700'
                  }`}>
                    {week.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {week.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Active week details */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl border border-gray-200">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">
                Week {activeWeek}: {weeks[activeWeek - 1].title}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {weeks[activeWeek - 1].details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {weeks.map((week, index) => (
            <div key={week.week} className="relative">
              {index < weeks.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gray-200"></div>
              )}
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-2xl text-white shadow-lg">
                    {week.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-primary-900 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                    Week {week.week}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    {week.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {week.description}
                  </p>
                  <ul className="space-y-2">
                    {week.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}