import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/app-components/Header'
import Footer from '@/components/app-components/Footer'
import { ThemeProvider } from '@/components/theme-provider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Ankit Kumar',
  description: 'Portfolio website of Ankit Kumar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
