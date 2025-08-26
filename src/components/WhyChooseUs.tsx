'use client'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: "💬",
      title: "We speak business language, not just tech jargon",
      description: "Clear communication focused on business outcomes, ROI, and practical implementation rather than technical complexity."
    },
    {
      icon: "📈",
      title: "We focus on results you can measure — time saved, costs reduced, new revenue opportunities",
      description: "Every recommendation comes with quantifiable metrics and realistic projections based on your specific business model."
    },
    {
      icon: "🎓",
      title: "Run by a CTO and AI researcher with hands-on system building experience",
      description: "Led by Dr. [Your Name], PhD in AI and Co-Founder & CTO of MessengerCo, with real-world experience in both research and implementation."
    },
    {
      icon: "🏢",
      title: "We make AI accessible for SMEs — so you can compete with bigger players",
      description: "Tailored solutions designed for small and medium enterprises, with budgets and timelines that make sense for your scale."
    }
  ]

  const stats = [
    { number: "4", label: "Week Sprint", description: "Fast, focused results" },
    { number: "100%", label: "Practical Focus", description: "No theoretical fluff" },
    { number: "12", label: "Month Roadmap", description: "Clear implementation plan" },
    { number: "∞", label: "Business Value", description: "Measurable ROI focus" }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Why Choose AI Integration Sprint
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We&apos;re different from other AI consultants. Here&apos;s how:
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent-500 mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-primary-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Advantage */}
        <div className="bg-primary-900 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            The Bottom Line
          </h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            While other consultants give you reports to read, we give you prototypes to test. 
            While they provide theories, we deliver practical roadmaps. While they talk about AI&apos;s potential, 
            we show you exactly how it works with your business.
          </p>
        </div>
      </div>
    </section>
  )
}