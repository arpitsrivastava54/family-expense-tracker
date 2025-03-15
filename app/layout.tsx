import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Family Expense Tracker',
  description: 'Family expense tracker which tracks all record of your family',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
