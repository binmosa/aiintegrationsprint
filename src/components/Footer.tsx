'use client'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom">
        <div className="py-16 border-b border-primary-800">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Beyond the Sprint</h3>
            <p className="text-xl text-blue-200 leading-relaxed">
              After your Sprint, you can take the roadmap and implement it with your own team — 
              or work with us at <span className="text-accent-400 font-semibold">Unietal</span> to 
              fully develop and launch your AI systems.
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/images/AI_Logo.png" 
                  alt="AI Integration Sprint" 
                  className="h-8 w-8 brightness-0 invert"
                />
                <h3 className="text-lg font-bold text-white ml-3">AI Integration Sprint</h3>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Transforming SMEs and traditional businesses through practical AI implementation. 
                Get clarity, prototypes, and actionable roadmaps in just 4 weeks.
              </p>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>hello@aiintegrationsprint.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Serving SMEs Globally</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <button className="hover:text-white transition-colors">About</button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">Our Process</button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">What You Get</button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">Contact</button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>AI Integration Sprint</li>
                <li>Business Assessment</li>
                <li>Prototype Development</li>
                <li>Implementation Roadmaps</li>
                <li>Ongoing Consultation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2024 AI Integration Sprint. All rights reserved.
            </div>
            <div className="flex space-x-6 text-blue-200 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}