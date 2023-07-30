import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import useUserStore from '@/store/UserStore'

const inter = Inter({ subsets: ['latin'], preload: true })

export const metadata = {
  title: 'Snack Exercise',
  description: 'snack exercise app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
   
  // console.log('layout:',useUserStore.getState().isLogin);
  

  return (
    <html lang="en">
      <body className={inter.className}>

        <div className='flex flex-col items-center justify-center bg-grayScreen w-screen max-w-[400px] min-h-screen m-auto no-scrollbar'>
          <div className='sticky top-0 w-full max-w-[400px]'>
            <Header/>
          </div>
          <main className='w-screen max-w-[400px] min-h-screen m-auto py-[60px] overflow-y-scroll no-scrollbar'>
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
