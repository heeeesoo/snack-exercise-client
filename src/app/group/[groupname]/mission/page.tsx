'use client'

import YouTube, { YouTubeProps } from "react-youtube";
const page = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
    height: '700',
    width: '350',
    playerVars: {
        autoplay: 1,
    },
    };
    return (
        <div className="flex flex-col items-center justify-center">
            <YouTube videoId="KrW4wrFQR4M" opts={opts} onReady={onPlayerReady} />
        </div>
    );
};

export default page;