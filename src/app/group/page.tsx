'use client'

import MissionCard from "@/components/card/MissionCard";
import { IconVerticalButton } from "@/components/common/Button";
import GuideSwiper from "@/components/card/GuideSwiper";

const page = () => {
    const handleClick = () => {
        console.log('!')
    }
    return (
        <div className="flex flex-col items-center">
            <div className="text-SystemGray4 text-[14px] font-normal pb-[32px]">
                가입된 그룹이 없습니다
            </div>
            <div className="text-[20px] font-bold w-9xl pb-[16px]">
                그룹 가이드
            </div>
            <div className="flex items-center">
                <GuideSwiper />
            </div>
            <div className="pb-[40px]"></div>
            <div className="flex justify-between w-9xl">
                <IconVerticalButton title="그룹 만들기" onClick={handleClick} />
                <IconVerticalButton title={"dd <br/> dsd"} onClick={handleClick} />
            </div>
            <div className="text-[20px] font-bold w-9xl pb-[16px] pt-[40px]">
                랜덤으로 운동 미션 받기
            </div>
            <MissionCard />
        </div>
    );
};

export default page;