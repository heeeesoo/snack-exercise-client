import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/header/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Snack Exercise',
  description: 'snack exercise app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='
        flex 
        flex-col
        items-center	
        bg-grayScreen
        w-screen
        max-w-[400px]
        h-screen
        m-auto
        '>
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
