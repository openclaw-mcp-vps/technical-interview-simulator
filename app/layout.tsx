import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Technical Interview Simulator — Practice with AI Feedback',
  description: 'Simulate real technical interviews with coding challenges, system design questions, and personalized AI-powered improvement suggestions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3a4136f8-4c84-4089-aa18-bf0f286be475"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
