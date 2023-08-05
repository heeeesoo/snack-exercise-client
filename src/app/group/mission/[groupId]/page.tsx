'use client'
import YouTube, { YouTubeProps } from "react-youtube";
import { useRouter, useSearchParams } from 'next/navigation';
import { BasicButton } from "@/components/common/Button";
import ProgressBar from "@/components/common/ProgressBar";
import { useEffect, useState } from "react";
import TokenStore from "@/store/TokenStore";

const Mission = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlParams = new URLSearchParams(decodeURIComponent(`${searchParams}`));
    const nameParamValue : any = urlParams.get("name");
    const idParamValue : string | null = urlParams.get("id");
    const randomValue : string | null  = urlParams.get('random');
    const videoId = nameParamValue.split("shorts/")[1];
    const [missionStart, setMissionStart] = useState(false);
    const [progressComplete, setProgressComplete] = useState(false);

    const handleProgressBarComplete = async () => {
        setProgressComplete(true);

        const postUrl =  randomValue ?
        `${process.env.NEXT_PUBLIC_SERVER_URL}/missions/random/${idParamValue}/finish` 
        :
        `${process.env.NEXT_PUBLIC_SERVER_URL}/missions/${idParamValue}/finish`;

        const reqDataToSend = {
            calory: 20,
            lengthOfVideo: 30
        }
    
        try {
            const response = await fetch(postUrl, {
                method: 'POST',
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
            console.log('mission complete:', responseData);
            router.push('/group/mission/finish');
        } catch (error) {
            console.log(error);
        }
    };
    
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const handleStartClick = async () => {
        setMissionStart(true);

        const postUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/missions/start`; 

        const reqDataToSend = {
            missionId: idParamValue,
        }
    
        try {
            const response = await fetch(postUrl, {
                method: 'POST',
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
            console.log('mission start:', responseData);
        } catch (error) {
            console.log(error);
        }

    }

    const opts: YouTubeProps['opts'] = {
        height: '650', // 높이 100% 설정
        width: '100%',  // 너비 100% 설정
        playerVars: {
            autoplay: 1,
            controls: 1,
            // fs: 1, // 전체 화면 버튼 활성화
            modestbranding: 1, 
            rel: 0,
            loop: 1,
            playlist: videoId, 
        },
    };
    
    return (
        <div className="grid grid-rows-[auto, 1fr, auto] items-start w-screen max-w-[400px] h-[93vh] relative">
            <div className="w-screen max-w-[400px] h-[85vh] z-0">
                <YouTube videoId={videoId} opts={opts} />
            </div>
            <div className="w-screen max-w-[400px] flex flex-col justify-center items-center h-[15vh] sticky bottom-0 bg-grayScreen z-10">
                {
                !missionStart ?
                <BasicButton label="30초 운동 시작하기" onClick={handleStartClick} type="button" />
                :
                <ProgressBar time={30} onComplete={handleProgressBarComplete} />
                }
            </div>
        </div>

    );
};

export default Mission;