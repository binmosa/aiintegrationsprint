import type { Metadata } from 'next'
import './globals.css'

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
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}