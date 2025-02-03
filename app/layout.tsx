import type { Metadata } from 'next'
import './globals.css'
import SmoothScrolling from '@/components/atoms/SmoothScrolling'

export const metadata: Metadata = {
  title: 'Lovefy - Chat with AI Men, Trans & Women',
  description:
    'Lovefy lets you create an account and chat with personalized AI personas. Explore intimate conversations, ask questions, and engage in a private environment with AI-generated characters. Experience connection with the future of AI chat.',
  alternates: {
    canonical: 'https://lovefy-lp.vercel.app/',
  },
  icons: {
    icon: '/favicon.icon',
  },
  openGraph: {
    title: 'Lovefy - Chat with AI Men, Trans & Women',
    description:
      'Lovefy lets you create an account and chat with personalized AI personas. Explore intimate conversations, ask questions, and engage in a private environment with AI-generated characters. Experience connection with the future of AI chat.',
    siteName: 'Lovefy',
    url: 'https://lovefy-lp.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/og.png',
      },
    ],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  )
}
