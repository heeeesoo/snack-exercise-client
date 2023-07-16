'use client'
import { BlurTitleButton } from "../common/Button";

const MissionCard = () => {

    const handleBlurTitleButtonClick = () => {
        console.log('!');
    }

    return (
        <div className="flex flex-col pt-[200px] items-center justify-evenly h-[320px] w-9xl bg-[url('/imageEx/mission.svg')] bg-cover bg-center rounded-[16px]">
            <BlurTitleButton title="3분 동안 스쿼트" subtitle="미션 수행하기" onClick={handleBlurTitleButtonClick}/>
        </div>
    );
};

export default MissionCard;