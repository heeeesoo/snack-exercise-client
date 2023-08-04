'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { nextIcon } from '@/constant/icon';
import {getDataClient} from "@/utils/getDataClient";

interface GroupCardProps {
    groupId : number;
}

interface MissionFlowType {
    memberId: number;
    memberName: string;
    profileImage : string | null;
    startAt: string;
    endAt: string | number
}

interface MissionFlowResType {
    missionFlow: MissionFlowType[];
    finishedRelayCount: number;
    exgroupEndDate: string;
}

// useEffect hook data fetch group mission card
export default function GroupMissionFlowCard({
    groupId
} : GroupCardProps) {
    const [data, setData] = useState<MissionFlowResType>()
    const [isLoading, setLoading] = useState(true)

    const calculateRemainingDays = (endDateString: string, startDateString: string): number => {
        const endDate = new Date(endDateString);
      
        // 오늘 날짜를 얻어 startDate에 할당합니다.
        const today = new Date();
        const startDate = new Date(startDateString || today.toISOString().slice(0, 10));
      
        // 남은 날짜를 밀리초로 계산합니다.
        const remainingTime = endDate.getTime() - startDate.getTime();
      
        // 밀리초를 일 단위로 변환합니다. (1일 = 24시간 * 60분 * 60초 * 1000밀리초)
        const remainingDays = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
      
        return remainingDays;
    };

    const getFormattedDate = (): string => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
      
        return `${month}월 ${day}일`;
    };


    // /exgroups/{exgroupId}/missions
    useEffect(() => {
        const fetchMissionFlow = async () => {
            try {
                  const result = await getDataClient(`/groups/${groupId}/missions`);
                  console.log(result);
                  setData(result.result.data)
              } catch (error) {
                  console.error('Error in fetchData:', error);
              }
        };
        fetchMissionFlow();
        setLoading(false);
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>


    return (
        <div>
            <div className='bg-white h-[240px] flex flex-col px-[20px] py-[20px] rounded-[16px]'>
                <div className='flex items-center justify-between'>
                    <div className='font-bold text-[20px]'>
                        {getFormattedDate()}
                    </div>
                    <div className='flex flex-col text-right text-SystemGray3 text-[12px]'>
                        <div>
                            {
                                data.exgroupEndDate !== null ?
                                <div>
                                    릴레이 종료일 D-{calculateRemainingDays(data.exgroupEndDate, "")}
                                </div>
                                :
                                '종료날짜가 정해지지 않았습니다'
                            }
                        </div>
                        <div>
                            현재 완료한 릴레이 횟수 {data.finishedRelayCount}회
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
                                            {
                                                mission.profileImage === null ?
                                                '😀'
                                                :
                                                mission.profileImage    
                                            }
                                        </div>      
                                        <div className='flex items-center justify-center text-[12px] text-SystemGray2 pt-[8px]'>
                                            {mission.memberName}
                                        </div>
                                        <div className='flex items-center justify-center w-[55px] h-[24px] mt-[8px] text-[12px] rounded-[14px] text-SystemGray2 bg-SystemGray6'>
                                            {mission.startAt.substring(11, 16)}~
                                        </div>      
                                        <div className='flex items-center justify-center w-[55px] h-[24px] mt-[8px] text-[12px] rounded-[14px] text-SystemGray2 bg-SystemGray6'>
                                            ~{
                                                mission.endAt === null ?
                                                '진행중'
                                                :
                                                mission.endAt.substring(11, 16)
                                            }
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
