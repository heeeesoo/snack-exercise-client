import MissionCard from "@/components/card/MissionCard";

const page = () => {
    return (
        <div className="flex flex-col items-center">
            <div>
                가입된 그룹이 없습니다
            </div>
            <MissionCard />
        </div>
    );
};

export default page;