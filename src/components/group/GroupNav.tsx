import GroupStore from "@/store/GroupStore";

interface GroupNavProps {
    handleIdChange: (id: number) =>void;
}

interface GroupType {
    id: number;
    name: string;
}

const GroupNav = ({
    handleIdChange
} : GroupNavProps) => {
    const {arrGroup, setGroup, removeGroup} = GroupStore();
    return (
        <div>
            <section className="flex h-[36px]">
                {arrGroup.map((group : GroupType) => {
                    return (
                        <div key={group.id} className="text-white bg-[#212131] mr-[8px] rounded-[16px] w-[88px] h-[36px] flex items-center justify-center">
                            <button onClick={() => handleIdChange(group.id)}>{group.name}</button>
                        </div>
                    )
                })}
            </section>
        </div>
    );
};

export default GroupNav;