'use client'
import { Button, BlurTitleButton } from "../common/Button";

const MissionCard = () => {

    const handleClick = () => {
        console.log('click')
    }

    const handleBlurTitleButtonClick = () => {
        console.log('!');
    }

    return (
        // <div className="flex flex-col items-center justify-evenly h-[320px] w-4/5 mt-[50px] bg-[url('/imageEx/mission.svg')]">
        <div className="flex flex-col pt-[200px] items-center justify-evenly h-[320px] w-4/5 mt-[50px] bg-[url('/imageEx/mission.svg')] bg-center rounded-[16px]">
            <BlurTitleButton title="3분 동안 스쿼트" subtitle="미션 수행하기" onClick={handleBlurTitleButtonClick}/>
        </div>
    );
};

export default MissionCard;