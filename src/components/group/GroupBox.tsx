'use client';
import GroupMissionCard from "./GroupMissionCard";
import GroupCard from "./GroupCard";
import getGroup from "@/utils/getGroup";
import { use } from "react";
import { useRouter } from 'next/navigation';
import { IconVerticalButton } from "@/components/common/Button";
import { People } from "@/constant/icon";
import { Mail } from "@/constant/icon";
import { useState, useEffect } from 'react'

interface GroupBoxProps {
    groupId : number;
    groupName: string;
}

export default function GroupBox({
    groupId,
    groupName
} : GroupBoxProps) {
    const router = useRouter();

    const handleClick = () => {
        console.log('!')
    }
    const handleGruopClick = () => {
        router.push('/group/create');
    }

    // data fetch -> swr 바꿔야 함
    // /api/exgroups/{groupId}
    const [data, setData] = useState<any>(null)
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            const fakeData = {
                "success": true,
                "code": 0,
                "result": {
                  "data": {
                    "id": 2,
                    "name": "운동하자",
                    "emozi": "",
                    "color": "#101010",
                    "description": "저희 그룹은 2주동안 매일매일 운동하는 것을 목표로합니다.",
                    "maxMemberNum": 6,
                    "goalRelayNum": 14,
                    "startTime": "09:00:00",
                    "endTime": "18:00:00",
                    "existDays": 14,
                    "startDate": null,
                    "endDate": null,
                    "penalty": "꼴등이 1등한테 스벅 깊티 쏘기\n",
                    "code": "105236",
                    "checkIntervalTime": 10,
                    "checkMaxNum": 2
                  }
                }
            }
            setData(fakeData)
            setLoading(false)
        })
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className="flex flex-col w-screen max-w-[400px]">
            <div className="flex items-center mx-m_5 pt-[32px] pb-[16px] justify-between">
                <div className="font-bold text-[20px]">
                   {/* {data.result.data.name} */}
                   {groupName}
                </div>
                <button className="text-SystemGray4 text-[14px]"> 멤버 상세정보 ＞</button>
            </div>
            <div className="mx-m_5">
                <GroupCard groupId={groupId} />
            </div>
            {/* <GroupMissionCard groupId={groupId}/> */}
            <div className="pb-[40px]"></div>
            <div className="flex items-center justify-center w-screen max-w-[400px]">
                <div className="flex justify-between w-9xl">
                    <IconVerticalButton title="멤버 초대하기" onClick={handleGruopClick} imglink={People}/>
                    <IconVerticalButton title="독촉하기" onClick={handleClick} imglink={Mail}/>
                </div>
            </div>
        </div>
    )
}
