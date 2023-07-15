'use client';
import Image from 'next/image';
import MissionCard from '@/components/card/MissionCard';
import { Button, IconHorizontalButton } from '@/components/common/Button';
import ClientOnly from '@/components/ClientOnly';
import KakaoLogin from '@/components/auth/KakaoLogin';
import Link from 'next/link';

export default function Home() {
  const isLogin = true;

  const handleClick = () => {
    console.log('click');
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <MissionCard />
      <div className='py-2'></div>
      <IconHorizontalButton title='랜덤 스낵 운동 받기' onClick={handleClick}/>
      <div className='py-2'></div>
      {isLogin ? null : <div className='fixed bottom-0 w-full max-w-[400px]'><KakaoLogin /></div>}
    </div>
  )
}
