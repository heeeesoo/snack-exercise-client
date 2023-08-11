'use client'
import React, { useState, useEffect } from 'react';

interface TimerType {
    time: number;
    onComplete?: () => void; // 완료 시 호출할 함수
}

const Timer = ({
    time,
    onComplete
} : TimerType) => {
    const [currentTime, setCurrentTime] = useState(0);
    const totalTime = time; // 주어진 시간

    useEffect(() => {
        let timer: NodeJS.Timeout; // 타이머 변수 정의

        if (currentTime < totalTime) {
            timer = setInterval(() => {
                setCurrentTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (currentTime >= totalTime && onComplete) {
            console.log('mission complete!')
            onComplete(); // 시간이 다 되었을 때 함수 호출
        }

        return () => {
            clearInterval(timer); // 타이머 중지
        };
    }, [currentTime, totalTime, onComplete]);

    const formatTime = (timeInSeconds : number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="timer font-bold leading-10 text-center flex items-center justify-center text-white border-[4px] border-gray-200 shadow rounded-[100px] w-[200px] h-[200px] bg-SystemBrand text-[30px] ">
            <p>{formatTime(currentTime)}</p>
        </div>
    );
};

export default Timer;
