import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
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

        <div className='flex flex-col items-center bg-grayScreen w-screen max-w-[400px] min-h-screen m-auto'>
          <div className='sticky top-0 w-full'>
            <Header/>
          </div>
          <main className='pb-[60px] w-screen max-w-[400px] min-h-screen m-auto'>
            {children}
          </main>
          <div className='sticky bottom-0 w-full'>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
