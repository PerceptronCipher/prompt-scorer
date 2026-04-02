import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PromptScore | Improve Your AI Results',
  description:
    'Instantly analyze your prompts for clarity, structure, and effectiveness with Neural Validator v2.1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className='min-h-full flex flex-col bg-white text-brand-dark'>
        {/* Using a flex-col layout ensures the Footer stays at the bottom on short pages */}
        <div className='flex-grow'>{children}</div>
      </body>
    </html>
  )
}
