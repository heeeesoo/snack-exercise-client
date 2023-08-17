'use client'
import {getDataClient} from "@/utils/getDataClient";
import { useEffect, useState } from "react";
import { BlurTitleButton, MiissionButton } from "../common/Button";
import Link from "next/link";
import SkeletonCard from "../loading/SkeletonCard";
import { MissionButton2 } from "../common/button/MissionButton2";
import { exerciseEasy, exerciseHard } from "@/constant/exercise";

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

export default function GroupMissionCard2({
    groupId,
    finishedRelayCount
}:GroupMissionCardProps) {
    const [data, setData] = useState<MissionResType>();
    const [easy, setEasy] = useState<any>();
    const [hard, setHard] = useState<any>();
    const [isLoading, setLoading] = useState(true);
    const [isMission, setIsMission] = useState(true);

    const handleClick = () => {
        console.log('hi')
    }

    useEffect(() => {
        
        const fetchMission = async () => {
            try {
                    const response = await getDataClient(`/missions/groups/${groupId}`);
                    console.log('mission card2:',response.result);
                    setData(response.result.data);
                    const randomExercise = getRandomExercise();
                    console.log('easy:',randomExercise.easy);
                    console.log('hard:',randomExercise.hard);
                    setEasy(randomExercise.easy);
                    setHard(randomExercise.hard);
                    if (response.result.message === "미션이 존재하지 않습니다."){
                        setIsMission(false);
                    }
              } catch (error) {
                  console.error('Error in fetchData:', error);
              }
        };
        fetchMission();
        setLoading(false);

        
    }, [groupId])

    const getRandomExercise = () => {
        const randomEasyIndex = Math.floor(Math.random() * exerciseEasy.length);
        const randomHardIndex = Math.floor(Math.random() * exerciseHard.length);
      
        const randomEasyExercise = exerciseEasy[randomEasyIndex];
        const randomHardExercise = exerciseHard[randomHardIndex];
      
        return {
          easy: randomEasyExercise,
          hard: randomHardExercise,
        };
    }
    
    if (isLoading) return <div><SkeletonCard/></div>
    if (!isMission) return <p>미션 시간이 아닙니다</p>
    if (!data) return <div><SkeletonCard/></div>

    return (
        // 회원 릴레이 운동 미션
        <div className="w-full">
        <Link
            href={{
                pathname: `/group/mission/${groupId}`,
                query: {
                    link: `${easy.videoLink}`,
                    id: `${data.missionId}`,
                    random: false,
                    name: `${easy.name}`,
                    exerciseId: `${easy.id}`,
                },
            }}
            className='w-full'
        >
            <MissionButton2 type="EASY" title={easy.name} subtitle={`릴레이 ${data.finishedRelayCount===null ? 1 : data.finishedRelayCount}회차 ${data.currentRoundPosition}번째`} onClick={handleClick} bgColor="SystemGray6"/>
        </Link>
        <div className="pb-[20px]"></div>
        <Link
            href={{
                pathname: `/group/mission/${groupId}`,
                query: {
                    link: `${hard.videoLink}`,
                    id: `${data.missionId}`,
                    random: false,
                    name: `${hard.name}`,
                    exerciseId: `${hard.id}`,
                },
            }}
            className='w-full'
        >
            <MissionButton2 type="HARD" title={hard.name} subtitle={`릴레이 ${data.finishedRelayCount===null ? 1 : data.finishedRelayCount}회차 ${data.currentRoundPosition}번째`} onClick={handleClick} bgColor="SystemGray6"/>
        </Link>
        </div>
    )
}
