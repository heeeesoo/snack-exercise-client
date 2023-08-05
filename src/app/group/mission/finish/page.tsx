'use client'
import Image from "next/image"
import { clap } from "@/constant/icon"
import { BasicButton } from "@/components/common/Button"
import { useRouter } from "next/navigation"

export default function Finish() {
  const router = useRouter();
  const handleClick = () => {
    router.replace('/');
  }
  return (
    <div className="flex flex-col items-center justify-center h-[85vh]">
        <Image 
        src={clap}
        width={120}
        height={120}
        alt="clap"
        />
        <div className="flex items-center justify-center text-center whitespace-pre-line text-[28px] font-bold py-[20px]">
          {`오늘 운동을 \n 수행하셨어요!`}
        </div>
        <div className="flex items-center justify-center text-center whitespace-pre-line text-SystemGray3">
          {`운동시간 30초`}
        </div>
        <div className="pb-[50px]" />
        <BasicButton label="홈으로 이동하기" type="button" onClick={handleClick}/>
    </div>
  )
}
