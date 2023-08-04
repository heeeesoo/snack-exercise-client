'use client'

import MissionCard from "@/components/card/MissionCard";
import { IconVerticalButton } from "@/components/common/Button";
import GuideSwiper from "@/components/card/GuideSwiper";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

import { People } from "@/constant/icon";
import { Mail } from "@/constant/icon";

import UserStore from "@/store/UserStore";
import { Carousel } from 'flowbite-react';

async function getData() {
    const res = await fetch('https://api.example.com/...')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}


const Page = () => {
    const {isLoggedIn, login, logout} = UserStore();
    
    const router = useRouter();
    const handleCodeClick = () => {
        router.push('/code');
    }
    const handleGruopClick = () => {
        router.push('/group/create');
    }

    useEffect(()=>{
      if(!isLoggedIn){
        console.log(isLoggedIn);
        router.replace('/login');
        }
    },[])

    return (
        <div className="flex flex-col items-center pt-[15px]">
            <div className="text-[20px] font-bold w-9xl pb-[16px]">
                그룹 가이드
            </div>
            <div className="flex items-center">
                <GuideSwiper />
            </div>
            <div className="pb-[40px]"></div>
            <div className="flex justify-between w-9xl">
                <IconVerticalButton title="그룹 만들기" onClick={handleGruopClick} imglink={People}/>
                <IconVerticalButton title="초대 코드" onClick={handleCodeClick} imglink={Mail}/>
            </div>
            <div className="text-[20px] font-bold w-9xl pb-[16px] pt-[40px]">
                랜덤으로 운동 미션 받기
            </div>
            <MissionCard />
        </div>
    );
};

export default Page;