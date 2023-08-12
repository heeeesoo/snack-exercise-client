'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { nextIcon } from '@/constant/icon';
import {getDataClient} from "@/utils/getDataClient";
import GroupMissionCard from './GroupMissionCard';
import SkeletonLineSmall from '../loading/SkeletonLineSmall';

interface GroupCardProps {
    groupId : number;
    missionOrder: boolean;
    goalRelayNum: number;
    groupStartTime: string;
    groupEndTime: string;
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
    groupId,
    missionOrder,
    goalRelayNum,
    groupStartTime,
    groupEndTime
} : GroupCardProps) {
    const [data, setData] = useState<MissionFlowResType>()
    const [isLoading, setLoading] = useState(true)
    console.log(groupId, groupStartTime, groupEndTime);

    const calculateRemainingDays = (endDateString: string, startDateString: string): number => {
        const endDate = new Date(endDateString);
      
        const today = new Date();
        const startDate = new Date(startDateString || today.toISOString().slice(0, 10));
      
        const remainingTime = endDate.getTime() - startDate.getTime();
      
        const remainingDays = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
      
        return remainingDays;
    };

    const getFormattedDate = (): string => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
      
        return `${month}월 ${day}일`;
    };

    // 현재 시각이 startTime ~ endTime 사이인지 확인
    function isTimeInRange(startTime : string, endTime : string) {
        const currentTime = new Date();
        const formattedStartTime = new Date(currentTime.toDateString() + ' ' + startTime);
        const formattedEndTime = new Date(currentTime.toDateString() + ' ' + endTime);
        
        return currentTime >= formattedStartTime && currentTime <= formattedEndTime;
    }
    

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
    }, [groupId])
    
    if (isLoading) return (<SkeletonLineSmall />);
    if (!data) return (<SkeletonLineSmall />);


    return (
        <div className='flex flex-col items-center w-full'>
            <div className={`bg-white ${missionOrder && isTimeInRange(groupStartTime, groupEndTime) ? 'h-[360px]' : 'h-[270px]'} w-9xl flex flex-col px-[20px] py-[20px] rounded-[16px] justify-between border border-gray-200 shadow`}>
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
                            {/* 현재 완료한 릴레이 횟수 {data.finishedRelayCount}회 */}
                            릴레이 횟수 {' '}
                            {data.finishedRelayCount === null ? `0/${goalRelayNum}회` : `${data.finishedRelayCount}/${goalRelayNum}`}
                        </div>
                    </div>
                </div>
                <div className='flex pt-[20px]'>
                    {
                        isTimeInRange(groupStartTime, groupEndTime) ?
                            missionOrder ?
                            <GroupMissionCard groupId={groupId} finishedRelayCount={data.finishedRelayCount} />
                            :
                            data.missionFlow.length > 0 ?
                            <div className="flex flex-row overflow-auto w-screen max-w-[400px] h-auto  no-scrollbar">
                                {
                                    data.missionFlow.map((mission : any) => {
                                        return(
                                            <div key={mission.startAt} className='flex flex-row justify-between items-stretch w-[90px] pr-[20px]'>
                                                <div className='flex flex-col items-center justify-center'>
                                                    <div className='flex items-center justify-center w-[80px] h-[55px] text-[55px]'>
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
                                                    <div className='flex items-center justify-center w-[65px] h-[24px] mt-[8px] text-[12px] rounded-[14px] text-SystemGray2 bg-SystemGray6'>
                                                        {mission.startAt.substring(11, 16)} ~
                                                    </div>      
                                                    <div className={`flex items-center justify-center w-[65px] h-[24px] mt-[8px] text-[12px] rounded-[14px] text-SystemGray2 ${mission.endAt === null ?' bg-SystemBrand' : 'bg-SystemGray6'}`}>
                                                        {
                                                            mission.endAt === null ?
                                                            <div className='text-white'>
                                                                ~ 진행중
                                                            </div>
                                                            :
                                                            <div>
                                                            ~ {mission.endAt.substring(11, 16)}
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <Image src={nextIcon} width={52} height={96} alt='next'/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div>
                                미션 기록이 없습니다
                            </div>
                        :
                        <div className='flex flex-col items-center w-full text-center'>
                            <div className='font-bold text-[20px]'>
                                그룹 시간은 
                            </div>
                            <br />
                            <div className='flex'>
                                <div className='w-[80px] rounded-lg text-white bg-SystemBrand'>{groupStartTime}</div> 
                                <div className='px-[3px]'>~</div> 
                                <div className='w-[80px] rounded-lg text-white bg-SystemBrand'>{groupEndTime}</div>
                            </div>
                            <br />
                            <div className='font-bold text-[20px]'>
                            입니다
                            </div>
                            <br />
                            <div className='font-bold text-[16px]'>
                            🏃잠시 뒤에 만나요🏃
                            </div>
                        </div>
                    }
                </div>
            </div>
        
        </div>
    )
}
