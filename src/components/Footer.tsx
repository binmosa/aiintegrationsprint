'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neural-900 to-primary-950 text-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Logo and Company */}
            <div className="flex items-center">
              <Image 
                src="/images/AI_Logo.png" 
                alt="AI Integration Sprint" 
                width={40}
                height={40}
                className="h-10 w-10 brightness-0 invert opacity-90"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white">AI Integration Sprint</h3>
                <p className="text-blue-200 text-sm">Validate $100K–$5M in ROI opportunities</p>
              </div>
            </div>

            {/* Simple Links */}
            <div className="flex space-x-8 text-blue-200 text-sm">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col items-center text-center text-blue-200 text-sm space-y-2">
            <div>
              © {new Date().getFullYear()} AI Integration Sprint. All rights reserved.
            </div>
            <div>
              AI Integration Sprint is operated by Unietal LLC, 312 W 2nd St Unit #A119 Casper, WY 82601
            </div>
            <div>
              <span>A proven framework to de-risk AI investments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}