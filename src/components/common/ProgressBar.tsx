'use client'
import React, { useState, useEffect } from 'react';

interface ProgressBarType {
    time: number;
}

const ProgressBar = ({
    time
} : ProgressBarType) => {
    const [currentTime, setCurrentTime] = useState(0);
    const totalTime = time; // 주어진 시간

    useEffect(() => {
        let timer: NodeJS.Timeout; // 타이머 변수 정의

        if (currentTime < totalTime) {
            timer = setInterval(() => {
                setCurrentTime(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer); // 타이머 중지
        };
    }, [currentTime, totalTime]);

    const progressPercent = (currentTime / totalTime) * 100;

    return (
        <div className="max-w-[400px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-9xl">
            <div className="bg-SystemBrand h-2.5 rounded-full" style={{ width: `${progressPercent}%`, transition: 'width 1s linear' }}></div>
        </div>
    );
};

export default ProgressBar;
