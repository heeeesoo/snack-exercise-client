import Image from "next/image"
import { LogoMedium } from "@/constant/icon"
import { useEffect, useState } from 'react'

export default function Splash() {
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
