'use client'
import Button from "../common/Button";

const MissionCard = () => {

    const handleClick = () => {
        console.log('click')
    }

    return (
        <div className="flex flex-col items-center justify-evenly bg-slate-100 h-[208px] w-4/5 mt-[50px]">
            <div className="w-4/5 h-[120px] bg-white rounded-md">
                Mission Card
            </div>
            <Button label="미션 수행 go" type="mission" onClick={handleClick}/>
        </div>
    );
};

export default MissionCard;