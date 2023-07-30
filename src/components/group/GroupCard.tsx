'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { nextIcon } from '@/constant/icon';

interface GroupCardProps {
    groupId : number;
}

// useEffect hook data fetch group mission card
export default function GroupCard({
    groupId
} : GroupCardProps) {
    const [data, setData] = useState<any>(null)
    const [isLoading, setLoading] = useState(true)


    // /exgroups/{exgroupId}/missions
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            const fakeData = {
                "missionFlow": [
                  {
                    "memberId": 0,
                    "memberName": "정희수",
                    "profileImage": "😀",
                    "startAt": "2023-07-29T23:11:28.882Z",
                    "endAt": "2023-07-29T23:11:28.882Z"
                  },
                  {
                    "memberId": 1,
                    "memberName": "오진서",
                    "profileImage": "😝",
                    "startAt": "2023-07-29T23:13:28.882Z",
                    "endAt": "2023-07-29T23:11:28.882Z"
                  },
                  {
                    "memberId": 2,
                    "memberName": "김민정",
                    "profileImage": "🥰",
                    "startAt": "2023-07-29T23:15:28.882Z",
                    "endAt": "2023-07-29T23:11:28.882Z"
                  },
                  {
                    "memberId": 3,
                    "memberName": "한유진",
                    "profileImage": "🥹",
                    "startAt": "2023-07-29T23:17:28.882Z",
                    "endAt": "2023-07-29T23:11:28.882Z"
                  }
                ],
                "finishedRelayCount": 0,
                "exgroupEndDate": "2023-07-29"
            }
            setData(fakeData)
            setLoading(false)
        })
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>


    return (
        <div>
            <div className='bg-white h-[240px] flex flex-col px-[20px] py-[20px] rounded-[16px]'>
                <div className='flex items-center justify-between'>
                    <div className='font-bold text-[20px]'>
                        7월 30일
                    </div>
                    <div className='flex flex-col text-right text-SystemGray3 text-[12px]'>
                        <div>
                            릴레이 종료일 D-20
                        </div>
                        <div>
                            현재 완료한 릴레이 횟수 7회
                        </div>
                    </div>
                </div>
                <div className='flex pt-[20px]'>
                    {
                        data.missionFlow.map((mission : any) => {
                            return(
                                <div key={mission.startAt} className='flex w-[80px]'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-center w-[55px] h-[55px] text-[55px]'>
                                            {mission.profileImage}
                                        </div>      
                                        <div className='flex items-center justify-center text-[12px] text-SystemGray2 pt-[8px]'>
                                            {mission.memberName}
                                        </div>
                                        <div className='flex items-center justify-center w-[55px] h-[24px] mt-[8px] text-[12px] rounded-[14px] text-SystemGray2 bg-SystemGray6'>
                                            01:15~
                                        </div>      
                                        <div className='flex items-center justify-center w-[55px] h-[24px] mt-[8px] text-[12px] rounded-[14px] text-SystemGray2 bg-SystemGray6'>
                                            ~01:40
                                        </div>
                                    </div>
                                    <Image src={nextIcon} width={6.5} height={12} alt='next'/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        
        </div>
    )
}
