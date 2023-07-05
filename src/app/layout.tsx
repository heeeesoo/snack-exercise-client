import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/header/Header'

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
        bg-slate-400 
        w-screen
        max-w-[390px]
        h-screen
        m-auto
        '>
          <Header/>
          {children}
        </div>
      </body>
    </html>
  )
}
