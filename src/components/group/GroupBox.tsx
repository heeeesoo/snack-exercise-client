'use client';
import GroupMissionFlowCard from "./GroupMissionFlowCard";
import GroupMemRanking from "./GroupMemRanking";
import getGroup from "@/utils/getGroup";
import { useRouter } from 'next/navigation';
import { IconVerticalButton } from "@/components/common/Button";
import { People } from "@/constant/icon";
import { Mail } from "@/constant/icon";
import { useState, useEffect } from 'react'
import {getDataClient} from "@/utils/getDataClient";
import TokenStore from "@/store/TokenStore";
import { BlurTitleButton } from "@/components/common/Button";
import Link from "next/link";

interface GroupBoxProps {
    groupId : number;
    groupName: string;
    currentMissionMemberId: null|number;
}

interface GroupType {
    id: number; // 그룹 Id
    name: string; // 그룹명
    emozi: string; // 그룹이모지
    color: string; // 그룹 색
    description: string; // 그룹 설명
    maxMemberNum: number; // 최대 참여 인원 수
    goalRelayNum: number; // 목표 릴레이 횟수
    startTime: string; // 시작 시간
    endTime: string; // 종료 시간
    existDays: number; // 목표 릴레이 기간
    startDate: string | null; // 시작 날짜
    endDate: string | null; // 종료 날짜
    penalty: string; // 벌칙
    code: string; // 초대 코드
    checkIntervalTime: number; // 독촉 검사 시간 간격
    checkMaxNum: number; // 하루 독촉 검사 최대 횟수
    hostMemberId: number; // host인 멤버 아이디
}

export default function GroupBox({
    groupId,
    groupName,
    currentMissionMemberId
} : GroupBoxProps) {
    const router = useRouter();
    const {memberId} = TokenStore();
    const [isLoading, setLoading] = useState(true)
    const [groupData, setGroupData] = useState<GroupType>()
    console.log('GroupBox:',memberId, currentMissionMemberId)

    const handleGroupClick = () => {
        router.push(`/code/${groupData?.code}`);
    }

    const handleAlarmClick = async () => {

        const postUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/alarm/reminder`; 

        const reqDataToSend = {
            groupId: groupId,
        }
    
        try {
            const response = await fetch(postUrl, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': TokenStore.getState().token
                },
                body: JSON.stringify(reqDataToSend),
            });
        
            if (!response.ok) {
                throw new Error('Failed to update data');
            }
        
            const responseData = await response.json();
            console.log('alarm remider:', responseData);
        } catch (error) {
            console.log(error);
        }

    }

    
    useEffect(() => {
        const fetchMyGroupData = async () => {
            try {
                  const result = await getDataClient(`/groups/${groupId}`);
                  console.log('group:',result);
                  setGroupData(result.result.data)
              } catch (error) {
                  console.error('Error in fetchData:', error);
              }
        };

        if (groupId !== -1) {
            fetchMyGroupData();
            setLoading(false);
        }
    }, [groupId])

    const handlePatchRequest = async () => {
        const patchUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/groups/${groupId}/initiation`;
    
        try {
          const response = await fetch(patchUrl, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': TokenStore.getState().token
            },
          });
    
          if (!response.ok) {
            throw new Error('Failed to update data');
          }
    
          const updatedData = await response.json();
          console.log(updatedData);
          window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    
    if (isLoading) return <p>Loading...</p>
    if (!groupData) return <p>No profile data</p>

    return (
        <div className="flex flex-col w-screen max-w-[400px]">
            <div className="flex items-center mx-m_5 pt-[32px] pb-[16px] justify-between">
                <div className="font-bold text-[20px]">
                   {groupData.name}
                </div>
                <Link
                    href={{
                        pathname: `/group/member/${groupId}`,
                    }}
                >
                    <div className='text-SystemGray4 text-[14px]'>
                        멤버 상세정보 ＞
                    </div>
                </Link>
            </div>
            <div className="mx-m_5">
                {
                    groupData.startDate === null ?
                    groupData.hostMemberId === memberId ?
                        <BlurTitleButton title="릴레이 시작하기" subtitle="함께 하는 운동" onClick={handlePatchRequest} bgColor="white"/>
                        :
                        <div className="bg-white  h-[70px] rounded-[12px] flex flex-col items-start justify-center px-[10px] text-SystemGray2">
                            <div className="font-bold text-[20px]">
                                릴레이 시작 대기 중입니다
                            </div>
                            <div className="text-[12px] font-medium">
                            방장이 시작하기 전까지 기다려주세요🏃
                            </div>
                        </div>
                    :
                    memberId === currentMissionMemberId ?
                    <GroupMissionFlowCard groupId={groupId} goalRelayNum={groupData.goalRelayNum} missionOrder={true}/>
                    :
                    <GroupMissionFlowCard groupId={groupId} goalRelayNum={groupData.goalRelayNum} missionOrder={false}/>
                }
            </div>
            <div className="pb-[40px]"></div>
            <div className="flex items-center justify-center w-screen max-w-[400px]">
                <div className="flex justify-between w-9xl">
                    <IconVerticalButton title="멤버 초대하기" onClick={handleGroupClick} imglink={People}/>
                    <IconVerticalButton title="콕 찌르기" onClick={handleAlarmClick} imglink={Mail}/>
                </div>
            </div>
            <div className="pb-[40px]" />
            <div className="mx-m_5">
                <GroupMemRanking groupId={groupId} />
            </div>
        </div>
    )
}
