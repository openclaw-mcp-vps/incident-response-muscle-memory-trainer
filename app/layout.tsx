import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Response Muscle Memory Trainer',
  description: 'Practice incident response with realistic scenarios. Train your SRE and DevOps teams to respond faster and smarter.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11b96a95-f794-4034-91f7-7ccba5327494"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
