'use client'
import getGroup from "@/utils/getGroup";
import getAllGroups from "@/utils/getAllGroups";
import Link from "next/link";
import GroupBox from "@/components/group/GroupBox";
import { useState, useEffect } from "react";
import { use } from "react";
import GroupStore from "@/store/GroupStore";
import GroupNav from "@/components/group/GroupNav";

// const getPosts = async (): Promise<any> => {
//     const groups = await getAllGroups();
  
//     return groups;
// };

// function 이름 -> getGroups() 접근자 신경써서 붙이기
export default function Group() {
    // const groups = use(getPosts());
    const {arrGroup, setGroup, removeGroup} = GroupStore();
    const [gruopId, setGroupId] = useState<number>(1);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        // html 매칭 문제 해결
        console.log('hey')
        setMounted(true);
        setGroupId(arrGroup[0]?.id);
    }, []);


    const handleIdChange = (newId : number) => {
        setGroupId(newId);
    };

    

    return (
        mounted &&
        <div className="flex flex-col items-center">
            {/* <GroupNav handleIdChange={handleIdChange}/> */}
            <div className="flex flex-row overflow-auto w-screen max-w-[400px] h-auto ml-[10%] no-scrollbar">
                <section className="flex flex-row h-[36px]">
                    {arrGroup.map((group : any) => {
                        return (
                            <div key={group.id} className={`${group.id === gruopId ? 'bg-SystemDarkBlue text-white' : 'text-SystemGray9'} mr-[8px] rounded-[16px] w-[88px] h-[36px] flex items-center justify-center`}>
                                <button onClick={() => handleIdChange(group.id)}>{group.name}</button>
                            </div>
                        )
                    })}
                </section>
            </div>
            <div>
                <GroupBox groupId={gruopId}/>
            </div>
        </div>
    );
};
