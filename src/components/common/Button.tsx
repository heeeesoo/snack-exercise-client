import Image from "next/image";
import { ArrowRight, ArrowShuffle } from "@/constant/icon";

interface ButtonProps {
    label: string;
    type: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface BasicButtonProps {
    label: string;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface BlurTitleButtonProps {
    title: string;
    subtitle: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    bgColor? : string;
}

interface IconHorizontalButtonProps {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IconVerticalButtonProps {
    title: string;
    imglink: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface RoundButtonProps {
    label: string;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface MissionButtonProps {
    title: string;
    subtitle: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    bgColor? : string;
}


export function Button({ 
    label,
    type,
    onClick
 } : ButtonProps) {
    return (
        <div className={`${type==='mission' ? 'w-32' : 'w-9xl'} h-10 leading-10 text-center rounded-md bg-SystemBrand`}>
            <button onClick={onClick}>
                {label}
            </button> 
        </div>
    );
}

export function BasicButton({ 
    label,
    type,
    onClick
 } : BasicButtonProps) {
    return (
        <button type={type} onClick={onClick} className="h-[56px] font-bold leading-10 text-center text-white rounded-[16px] w-9xl bg-SystemBrand">
            {label}
        </button> 
    );
}

export function BlurTitleButton({
    title,
    subtitle,
    onClick,
    bgColor
} : BlurTitleButtonProps){
    return(
        <button onClick={onClick} className={`border border-gray-200 shadow flex justify-between items-center px-[20px] w-full h-[90px] rounded-[12px] bg-${bgColor}`}>
            <div className="flex flex-col items-start">
                <div className="text-[18px] font-bold text-left">
                    {title}
                </div>
                <div className="text-[12px] font-medium">
                    {subtitle}
                </div>
            </div>
            <div className="bg-SystemBrand w-[40px] h-[40px] flex items-center justify-center rounded-[100px]">
                <Image
                    src={ArrowRight}
                    width={24}
                    height={24}
                    alt="ArrowRight"
                />
            </div>
        </button>
    )
}

export function IconHorizontalButton({
    title,
    onClick
} : IconHorizontalButtonProps){
    return(
        <button onClick={onClick} className="flex justify-between px-[20px] items-center w-9xl bg-white rounded-[12px] h-[68px]">
            <div className="text-[16px] font-bold">
                {title}
            </div>
            <div className="bg-SystemGray6 w-[40px] h-[40px] flex items-center justify-center rounded-[100px]">
                <Image
                    src={ArrowShuffle}
                    width={20}
                    height={20}
                    alt="ArrowShuffle"
                />
            </div>
        </button>
    )
}

export function IconVerticalButton({
    title,
    imglink,
    onClick
} : IconVerticalButtonProps){
    return(
        <button onClick={onClick} className="border border-gray-200 shadow flex flex-col justify-around px-[20px] items-center w-[48%] bg-white rounded-[12px] h-[170px]">
            <div className="text-[16px] font-bold mr-auto whitespace-pre-line">
                {title}
            </div>
            <div className="bg-SystemGray6 w-[60px] h-[60px] flex items-center justify-center rounded-[100px] ml-auto">
                <Image
                    src={imglink}
                    width={28}
                    height={28}
                    alt="ArrowShuffle"
                />
            </div>
        </button>
    )
}

export function RoundButton({ 
    label,
    type,
    onClick
 } : RoundButtonProps) {
    return (
        <button type={type} onClick={onClick} className="border-[4px] border-gray-200 shadow font-bold leading-10 text-center text-white rounded-[100px] w-[200px] h-[200px] bg-SystemBrand text-[20px]">
            {label}
        </button> 
    );
}

export function MiissionButton({
    title,
    subtitle,
    onClick,
    bgColor
} : MissionButtonProps){
    return(
        <button onClick={onClick} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-left text-gray-900 dark:text-white">{title}</h5>
            </div>
            <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">{subtitle}</p>
            <div className="inline-flex justify-center w-9xl items-center px-3 py-2 text-sm font-medium text-center text-white rounded-[12px] bg-SystemBrand hover:bg-SystemHoverBlue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                시작하기
                {/* <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg> */}
            </div>
        </button>
    )
} 