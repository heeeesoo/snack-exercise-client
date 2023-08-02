'use client';
import MissionCard from '@/components/card/MissionCard';
import { IconHorizontalButton } from '@/components/common/Button';
import KakaoLogin from '@/components/auth/KakaoLogin';
import NameLogin from '@/components/auth/NameLogin';

export default function Page() {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <div className="text-[20px] font-bold w-9xl pb-[5px]">
        랜덤으로 운동 미션 받기
      </div>
      <MissionCard title= "3분 동안 스쿼트" subtitle='미션 수행하기'/>
      <div className='py-2'></div>
      <IconHorizontalButton title='랜덤 스낵 운동 받기' onClick={handleClick}/>
      <div className='py-2'></div>
      {/* <div className='fixed bottom-0 w-full max-w-[400px]'><KakaoLogin /></div> */}
      <div className='fixed bottom-0 w-full max-w-[400px]'><NameLogin /></div>
    </div>
  )
}