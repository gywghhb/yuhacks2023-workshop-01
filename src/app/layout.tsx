import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yuHacks 2023 -- York University\'s largest hackathon',
  description: 'yuHacks(2023) is the sixth iteration of this student-led event. Our goal is to provide a fun, inclusive, and growth-focused experience that prepares participants for their future tech careers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
