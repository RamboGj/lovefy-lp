import type { Metadata } from 'next'
import './globals.css'
import SmoothScrolling from '@/components/atoms/SmoothScrolling'

export const metadata: Metadata = {
  title: 'Lovefy',
  description: 'Lovefy Landing Page',
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
