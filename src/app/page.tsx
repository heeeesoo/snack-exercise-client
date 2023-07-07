'use client';
import Image from 'next/image'
import MissionCard from '@/components/card/MissionCard'
import Button from '@/components/Button'
import ClientOnly from '@/components/ClientOnly'

export default function Home() {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <div className='flex flex-col items-center w-full'>
      main
      <MissionCard />

      <Button type='normal' label='랜덤 스낵 운동 받기' onClick={handleClick}/>
    </div>
  )
}
