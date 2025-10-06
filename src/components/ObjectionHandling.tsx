'use client'

export default function ObjectionHandling() {
  const objections = [
    {
      concern: "What if our data is messy or incomplete?",
      answer: "That's completely normal — most companies have this challenge. We'll do a data readiness assessment in Week 1. If your data isn't strong enough, we can use sanitized datasets for the prototype or focus on building a roadmap to improve your data infrastructure first. Either way, you'll know exactly what steps to take.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      concern: "We're in a regulated industry — will this work for us?",
      answer: "Yes. Many of our clients operate in regulated environments (healthcare, finance, logistics). We design solutions that respect your compliance requirements and can guide you on data privacy, audit trails, and regulatory considerations specific to your industry.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      concern: "What if AI isn't the right fit for our business?",
      answer: "That's a valid outcome — and better to know early. The free consultation will help us determine if there are genuine AI opportunities in your business. If not, we'll tell you honestly. You won't waste money on a Sprint that won't deliver value.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      concern: "Our team is already stretched thin",
      answer: "We've designed the Sprint to minimize your team's time. You'll need about 8-10 hours total across 6 weeks — mostly for a kickoff meeting, brief stakeholder interviews, and a final demo. We do the heavy lifting so your team can stay focused on daily operations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      concern: "How do we know the ROI projections are realistic?",
      answer: "We use conservative estimates based on your actual process data and industry benchmarks. You'll see the calculations and assumptions behind every projection. Plus, the working prototype validates the technical feasibility — so you're not relying on theoretical numbers alone.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      concern: "What happens after the 6 weeks?",
      answer: "You'll have everything you need to move forward: a validated use case, working prototype, and detailed roadmap. From there, you can build internally with your own team, hire contractors, or work with us for full implementation. The choice is entirely yours — there's no obligation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-200/30 rounded-full mb-6">
              <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-primary-700">Common Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              You Might Be Wondering...
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Here are honest answers to the concerns we hear most often
            </p>
          </div>

          {/* Objections Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {objections.map((obj, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {obj.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 mb-2 text-lg">
                      {obj.concern}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {obj.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-xl p-8">
              <p className="text-lg text-neutral-700 mb-4">
                <span className="font-bold">Still have questions?</span> Let&apos;s talk through your specific situation.
              </p>
              <p className="text-sm text-neutral-600">
                In your free consultation, you&apos;ll get 3-5 AI opportunity ideas tailored to your business — no strings attached.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
