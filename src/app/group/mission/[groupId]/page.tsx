'use client'
import YouTube, { YouTubeProps } from "react-youtube";
import { usePathname, useSearchParams } from 'next/navigation';
import { BasicButton } from "@/components/common/Button";
import ProgressBar from "@/components/common/ProgressBar";

const Mission = () => {
    const searchParams = useSearchParams()
    const urlParams = new URLSearchParams(decodeURIComponent(`${searchParams}`));
    const nameParamValue : any = urlParams.get("name");
    const videoId = nameParamValue.split("shorts/")[1];
    
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const handleClick = () => {
        console.log('?')
    }

    const opts: YouTubeProps['opts'] = {
        height: '750', // 높이 100% 설정
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
        <div className="grid grid-rows-[auto, 1fr, auto] items-start w-screen max-w-[400px] h-[85vh]">
            <div className="w-screen max-w-[400px] h-[85vh]">
                <YouTube videoId={videoId} opts={opts} />
            </div>
            <div className="w-screen max-w-[400px] flex flex-col justify-center items-center h-[20vh] sticky bottom-0 bg-grayScreen">

                <ProgressBar time={3}/>
                <div className="pb-[10px]" />
                <BasicButton label="시작하기" onClick={handleClick} type="button" />
            </div>
        </div>
    );
};

export default Mission;