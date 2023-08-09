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
    onClick
} : BlurTitleButtonProps){
    return(
        <button onClick={onClick} className="flex justify-between items-center px-[20px] w-full bg-white h-[68px] rounded-[12px]">
            <div className="flex flex-col items-start">
                <div className="text-[20px] font-bold">
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
        <button onClick={onClick} className="flex flex-col justify-around px-[20px] items-center w-[48%] bg-white rounded-[12px] h-[170px]">
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
        <button type={type} onClick={onClick} className=" font-bold leading-10 text-center text-white rounded-[100px] w-[150px] h-[150px] bg-SystemBrand text-[20px]">
            {label}
        </button> 
    );
}