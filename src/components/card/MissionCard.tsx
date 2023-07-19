'use client'
import { BlurTitleButton } from "../common/Button";
import { useRouter } from "next/navigation";

interface MissionCardProps {
    title: string;
    subtitle: string;
    imgLink?: string;
    groupname?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MissionCard = ({
    title,
    subtitle,
    imgLink,
    groupname,
    onClick
}:MissionCardProps) => {

    const router = useRouter();
    const handleBlurTitleButtonClick = () => {
        console.log('!');
        router.push(`/group/${groupname}/mission`);
    }

    return (
        <div className={`flex flex-col pt-[200px] items-center justify-evenly h-[320px] w-9xl bg-[url("/imageEx/mission2.svg")] bg-cover bg-center rounded-[16px]`}>
            <BlurTitleButton title={title} subtitle={subtitle} onClick={handleBlurTitleButtonClick}/>
        </div>
    );
};

export default MissionCard;