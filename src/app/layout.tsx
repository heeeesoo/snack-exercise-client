import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import useUserStore from '@/store/UserStore'

const inter = Inter({ subsets: ['latin'], preload: true })

export const metadata = {
  title: 'SnackPot',
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
      <head>
          <link
              rel="manifest"
              href="/manifest.json"
          />
      </head>
      <body className={inter.className}>
        <div className='flex flex-col justify-start bg-grayScreen w-screen max-w-[400px] min-h-screen m-auto no-scrollbar'>
          <div className='sticky top-0 w-full max-w-[400px] shadow-sm'>
            <Header/>
          </div>
          <main className='w-screen max-w-[400px] min-h-[90vh] m-auto overflow-y-scroll no-scrollbar'>
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
