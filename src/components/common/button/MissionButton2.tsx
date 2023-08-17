import Image from "next/image";
import { exercise1, exercise2, exercise3 } from "@/constant/icon";

interface MissionButtonProps {
    title: string;
    subtitle: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    bgColor?: string;
    type?: string;
}

export function MissionButton2({
    title,
    subtitle,
    onClick,
    bgColor,
    type
}: MissionButtonProps) {
    const getRandomImageNumber = () => {
        return Math.floor(Math.random() * 3);
    };
    const imagePaths = [
        exercise1,
        exercise2,
        exercise3,
    ];

    const randomImageNumber = getRandomImageNumber();
    return (
        <button onClick={onClick} className="w-full bg-white border border-gray-200 rounded-[16px] h-[120px] flex flex-row justify-between">
            <div className="flex flex-col items-center justify-between w-1/4 h-[120px] py-6">
                <div className="font-bold">
                    {type}
                </div>
                <Image
                    width={35}
                    height={35}
                    alt="exercise"
                    src={imagePaths[randomImageNumber]}
                />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 py-2 pl-4 pr-3">
                <div className="mb-2 text-[15px] font-bold tracking-tight text-gray-900 h-[20px] w-full ">{title}</div>
                <p className="mb-3 font-normal text-[14px] text-gray-700 ">{subtitle}</p>
                {onClick &&
                    <div className="inline-flex justify-center items-center w-[100%] px-3 py-2 text-sm font-medium text-center text-white rounded-[12px] bg-SystemBrand hover:bg-SystemHoverBlue focus:ring-4 focus:outline-none focus:ring-blue-300">
                        시작하기
                    </div>
                }
            </div>
        </button>
    )
}
