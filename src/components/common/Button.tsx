import Image from "next/image";
import { ArrowRight, ArrowShuffle } from "@/constant/incon";

interface ButtonProps {
    label: string;
    type: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface BlurTitleButtonProps {
    title: string;
    subtitle: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IconHorizontalButton {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export function Button({ 
    label,
    type,
    onClick
 } : ButtonProps) {
    return (
        <div className={`${type==='mission' ? 'w-32' : 'w-3/4'} h-10 leading-10 text-center rounded-md bg-cyan-300`}>
            <button onClick={onClick}>
                {label}
            </button> 
        </div>
    );
}

export function BlurTitleButton({
    title,
    subtitle,
    onClick
} : BlurTitleButtonProps){
    return(
        <button onClick={onClick} className="flex justify-between items-center px-[20px] w-5/6 bg-SystemGray7_20 backdrop-opacity-20 h-[68px] rounded-[12px]">
            <div className="flex flex-col items-start">
                <div className="text-[20px] text-white">
                    {title}
                </div>
                <div className="text-[12px] text-white">
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
} : IconHorizontalButton){
    return(
        <button onClick={onClick} className="flex justify-between px-[20px] items-center w-4/5 bg-white rounded-[12px] h-[68px]">
            <div>
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