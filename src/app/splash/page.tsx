'use client'
import Image from "next/image"
import { LogoMedium } from "@/constant/icon"
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";


export default function Splash() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
        router.replace('/')
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
