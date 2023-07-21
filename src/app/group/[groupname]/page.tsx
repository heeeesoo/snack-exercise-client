'use client'

import MissionCard from "@/components/card/MissionCard";
import { mission2 } from "@/constant/icon";
import { IconVerticalButton } from "@/components/common/Button";

import { Flash } from "@/constant/icon";
import { PersonAdd } from "@/constant/icon";

const Page = ({ params }: { params: { groupname: string } }) => {
    // if (typeof window !== "undefined") {
    //     // Client-side-only code
    //     const code = new URL(window.location.href);
    //     console.log(code);
    // }
    const isStart = true;

    const handleClick = () => {
        console.log('!')
    }

    return (
        <div className="flex flex-col items-center">
            {params.groupname}
            {
                isStart ?
                <MissionCard title= "3분 동안 스쿼트" subtitle='미션 수행하기' imgLink={mission2} groupname={params.groupname}/>
                :
                <MissionCard title="릴레이 시작하기" subtitle="함께 하는 운동" imgLink={mission2} groupname={params.groupname}/>
            }
            <div className="flex justify-between w-9xl pt-[40px]">
                <IconVerticalButton title="멤버 초대하기" onClick={handleClick} imglink={PersonAdd}/>
                <IconVerticalButton title="독촉하기" onClick={handleClick} imglink={Flash}/>
            </div>
        </div>
    );
};

export default Page;