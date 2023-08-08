'use client'
import YouTube, { YouTubeProps } from "react-youtube";
import { useRouter, useSearchParams } from 'next/navigation';
import { BasicButton } from "@/components/common/Button";
import ProgressBar from "@/components/common/ProgressBar";
import { useEffect, useRef, useState } from "react";
import TokenStore from "@/store/TokenStore";
import Image from "next/image";

const Mission = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlParams = new URLSearchParams(decodeURIComponent(`${searchParams}`));
    const nameParamValue : any = urlParams.get("name");
    const idParamValue : string | null = urlParams.get("id");
    const randomValue : string | null  = urlParams.get('random'); // 회원, 랜덤 운동일 때 'true'
    const [missionStart, setMissionStart] = useState(false);
    const countRef = useRef<number>(0);
    // const videoId = nameParamValue.split("shorts/")[1];

    const handleProgressBarComplete = async () => {
        countRef.current += 1;

        if (countRef.current === 1) {
            const postUrl =  randomValue==='true' ?
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
        }

    };
    
    
    const handleStartClick = async () => {
        setMissionStart(true);
        console.log('??:',randomValue?.toString());

        const postUrl =  randomValue==='true' ?
            `${process.env.NEXT_PUBLIC_SERVER_URL}/missions/start?random=true` 
            :
            `${process.env.NEXT_PUBLIC_SERVER_URL}/missions/start?random=false`;
        
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
    
    // YouTube API
    // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    //     event.target.pauseVideo();
    // }

    // const opts: YouTubeProps['opts'] = {
    //     height: '650', // 높이 100% 설정
    //     width: '100%',  // 너비 100% 설정
    //     playerVars: {
    //         autoplay: 1,
    //         controls: 1,
    //         // fs: 1, // 전체 화면 버튼 활성화
    //         modestbranding: 1, 
    //         rel: 0,
    //         loop: 1,
    //         playlist: videoId, 
    //         mute: 1, // 음소거 설정
    //     },
    // };
    
    return (
        <div className="grid grid-rows-[auto, 1fr, auto] items-start w-screen max-w-[400px] h-[93vh] relative">
            <div className="w-screen max-w-[400px] h-[85vh] z-0 flex items-center justify-center">
                {/* <YouTube videoId={videoId} opts={opts} /> */}
                <img src={nameParamValue} alt="loading..." />
            </div>
            <div className="w-screen max-w-[400px] flex flex-col justify-center items-center h-[15vh] sticky bottom-0 bg-grayScreen z-10">
                {
                !missionStart ?
                <BasicButton label="30초 운동 시작하기" onClick={handleStartClick} type="button" />
                :
                <ProgressBar time={30} onComplete={handleProgressBarComplete} />
                }
                <div className="pb-[40px]" />
            </div>
        </div>

    );
};

export default Mission;