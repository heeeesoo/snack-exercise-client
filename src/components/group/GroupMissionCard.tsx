'use client'
import {getDataClient} from "@/utils/getDataClient";
import { useEffect, useState } from "react";
import { BlurTitleButton } from "../common/Button";
import Link from "next/link";

interface GroupMissionCardProps {
    groupId : number;
    finishedRelayCount: number;
}

interface MissionResType {
    missionId: number;
    finishedRelayCount: number;
    currentRoundPosition: number;
    exercise: ExerciseType;
}

interface ExerciseType {
    id: number;
    name: string;
    exerciseCategory: string;
    videoLink: string;
    description: string;
    minPerKcal: number;
}

export default function GroupMissionCard({
    groupId,
    finishedRelayCount
}:GroupMissionCardProps) {
    const [data, setData] = useState<MissionResType>();
    const [isLoading, setLoading] = useState(true);
    const [isMission, setIsMission] = useState(true);

    const handleClick = () => {
        console.log('hi')
    }

    useEffect(() => {
        const fetchMission = async () => {
            try {
                  const response = await getDataClient(`/missions/groups/${groupId}`);
                  console.log('mission:',response.result);
                  setData(response.result.data);
                  if (response.result.message === "미션이 존재하지 않습니다."){
                    setIsMission(false);
                  }
              } catch (error) {
                  console.error('Error in fetchData:', error);
              }
        };
        fetchMission();
        setLoading(false);
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!isMission) return <p>미션 시간이 아닙니다</p>
    if (!data) return <p>No profile data</p>

    return (
        <Link
            href={{
                pathname: `/group/mission/${groupId}`,
                query: {
                    name: `${data.exercise.videoLink}`
                },
            }}
            className='w-full'
        >
            <BlurTitleButton title={data.exercise.name} subtitle={`릴레이 ${finishedRelayCount}회차 ${data.currentRoundPosition}번째`} onClick={handleClick}/>
        </Link>
    )
}
