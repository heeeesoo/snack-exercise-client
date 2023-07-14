'use client';
import Image from 'next/image';
import MissionCard from '@/components/card/MissionCard';
import Button from '@/components/common/Button';
import ClientOnly from '@/components/ClientOnly';
import KakaoLogin from '@/components/auth/KakaoLogin';
import Link from 'next/link';

export default function Home() {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <MissionCard />
      <div className='py-2'></div>
      <Button type='normal' label='랜덤 스낵 운동 받기' onClick={handleClick}/>
      <div className='py-2'></div>
      <KakaoLogin />
      <Link href='/group/create'>
        그룹 만들기
      </Link>
    </div>
  )
}
