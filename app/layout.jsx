import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FakhriTrh',
  description: "Fakhri's personal website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`pb-4`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
