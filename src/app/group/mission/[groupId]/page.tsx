'use client'
import YouTube, { YouTubeProps } from "react-youtube";
import { useRouter, useSearchParams } from 'next/navigation';
import { BasicButton } from "@/components/common/Button";
import ProgressBar from "@/components/common/ProgressBar";
import { useEffect, useRef, useState } from "react";
import TokenStore from "@/store/TokenStore";
import Image from "next/image";
import { RoundButton } from "@/components/common/Button";
import Timer from "@/components/common/Timer";

const Mission = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlParams = new URLSearchParams(decodeURIComponent(`${searchParams}`));
    const linkParamValue : any = urlParams.get("link");
    const idParamValue : string | null = urlParams.get("id");
    const randomValue : string | null  = urlParams.get('random'); // 회원, 랜덤 운동일 때 'true'
    const nameValue : string | null  = urlParams.get('name'); // 운동 이름
    const memberValue : string | null  = urlParams.get('member'); // 회원 true, 비회원 false
    const exerciseIdValue : string | null  = urlParams.get('exerciseId'); 
    const [missionStart, setMissionStart] = useState(false);
    const countRef = useRef<number>(0);
    // const videoId = linkParamValue.split("shorts/")[1];

    const handleProgressBarComplete = async () => {
        countRef.current += 1;

        if(memberValue === 'false') {
            router.push('/group/mission/finish')
        }

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

        // const postUrl =  randomValue==='true' ?
        //     `${process.env.NEXT_PUBLIC_SERVER_URL}/missions/start?random=true` 
        //     :
        //     `${process.env.NEXT_PUBLIC_SERVER_URL}/missions/start?random=false`;
        const postUrl =  randomValue==='true' ?
            `${process.env.NEXT_PUBLIC_SERVER_URL}/missions/start?random=true` 
            :
            `${process.env.NEXT_PUBLIC_SERVER_URL}/mvp/missions/start`;
        
        // const reqDataToSend = {
        //     missionId: idParamValue,
        // }
        const reqDataToSend = randomValue==='true' ? 
            {
                missionId: idParamValue,
            }
            :
            {
                missionId: idParamValue,
                exerciseId: exerciseIdValue
            }

        console.log('start?:',idParamValue, exerciseIdValue);
        console.log('reqDataToSend:',reqDataToSend);
        
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
                const responseErrorData = await response.json();
                console.log('mission error:', responseErrorData)
                throw new Error('Failed to update data');
            }
            
            const responseData = await response.json();
            console.log('mission start:', responseData);
        } catch (error) {
            console.log(error);
        }
        
    }

    // 미션 시작 시 모바일 화면 안꺼지게
    useEffect(() => {
        let wakeLock: WakeLockSentinel | null = null;

        if (missionStart) {
            // Request a wake lock to prevent the screen from turning off
            navigator.wakeLock.request("screen")
                .then((lock) => {
                    wakeLock = lock;
                })
                .catch((error) => {
                    console.error("Failed to request wake lock:", error);
                });
        }

        // Cleanup function
        return () => {
            // Release the wake lock when the component is unmounted or mission is complete
            if (wakeLock) {
                wakeLock.release();
            }
        };
    }, [missionStart]);
    
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
        <div className="flex flex-col items-center w-screen max-w-[400px] h-[93vh] bg-white">
            <div className="w-screen max-w-[400px] flex items-center justify-center h-[50vh]">
                {/* <YouTube videoId={videoId} opts={opts} /> */}
                <img src={linkParamValue} alt="loading..." />
            </div>
            <div className="w-screen max-w-[400px] flex flex-col justify-center items-center bg-grayScreen h-[50vh]">
                <div className="pb-[20px] text-[20px] font-bold">
                    {nameValue}
                </div>
                {
                    !missionStart ?
                    <div className="w-screen max-w-[400px] flex flex-col items-center justify-center">
                        {/* <div className="text-[20px] text-SystemGray2 pb-[20px]">
                            30초 운동
                        </div> */}
                        <RoundButton label={`시작하기`} onClick={handleStartClick} type="button" />
                    </div>
                    :
                    // <ProgressBar time={30} onComplete={handleProgressBarComplete} />
                    <Timer time={30} onComplete={handleProgressBarComplete} />
                }
                <div className="pb-[40px]" />
            </div>
        </div>

    );
};

export default Mission;