'use client'
import Image from "next/image"
import { LogoMedium } from "@/constant/icon"
import { useEffect, useState } from 'react'

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(false);
        }, 3000);

        return () => {
        clearTimeout(timer);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-[80vh]">
            <Image 
            src={LogoMedium}
            width={225}
            height={48}
            alt="logo"
            />
        </div> 
    )
}
