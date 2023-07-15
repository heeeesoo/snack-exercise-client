import Image from "next/image";

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
                    src="/icons/common/ArrowRight.svg"
                    width={24}
                    height={24}
                    alt="ArrowRight"
                />
            </div>
        </button>
    )
}