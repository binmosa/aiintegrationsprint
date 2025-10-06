import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'AI Integration Sprint - Transform Your Business with AI in 4 Weeks',
  description: 'AI Integration Sprint helps SMEs and traditional businesses uncover real AI opportunities, test them quickly, and walk away with a clear implementation plan. Book your free consultation today.',
  keywords: 'AI integration, business transformation, SME consulting, artificial intelligence, business automation',
  openGraph: {
    title: 'AI Integration Sprint - Transform Your Business with AI in 4 Weeks',
    description: 'Discover where AI can save time and reduce costs in your business. Build a prototype demo and get a clear 12-month roadmap.',
    type: 'website',
    images: ['/images/AI_Logo.png'],
  },
  icons: {
    icon: '/images/AI_Logo.png',
    shortcut: '/images/AI_Logo.png',
    apple: '/images/AI_Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PRZ54WZN');
            `,
          }}
        />
      </head>
      <body className="bg-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRZ54WZN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}