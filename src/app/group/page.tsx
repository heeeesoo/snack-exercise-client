'use client'
import getGroup from "@/utils/getGroup";
import getAllGroups from "@/utils/getAllGroups";
import Link from "next/link";
import GroupBox from "@/components/group/GroupBox";
import { useState, useEffect } from "react";
import { headers } from "next/headers"
import TokenStore from "@/store/TokenStore";
import getDataClient from "@/utils/getDataClient";

interface GroupType {
    groupId: number;
    groupName: string;
    currentMissionMemberId: any;
}

// function 이름 -> getGroups() 접근자 신경써서 붙이기
export default function Group() {
    const [groupSelectedId, setGroupId] = useState<number>(0);
    const [groupName, setGroupName] = useState<string>('');
    const [groupMyList, setGroupMyList] = useState<GroupType[]>();

    useEffect(() => {
        const fetchData = async () => {
          try {
                const result = await getDataClient('/api/groups');
                setGroupMyList(result.result.data);
            } catch (error) {
                console.error('Error in fetchData:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (groupMyList && groupMyList.length > 0) {
            console.log(groupMyList[0].groupId)
            setGroupId(groupMyList[0].groupId);
            setGroupName(groupMyList[0].groupName);
        }
    },[groupMyList])

    const handleIdChange = (newId : number, newName: string) => {
        setGroupId(newId);
        setGroupName(newName);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row overflow-auto w-screen max-w-[400px] h-auto  no-scrollbar">
                <section className="flex flex-row h-[36px] ml-[5%]">
                    {groupMyList?.map((group : GroupType) => {
                        return (
                            <div key={group.groupId} className={`${group.groupId === groupSelectedId ? 'bg-SystemDarkBlue text-white' : 'text-SystemGray9'} mr-[8px] rounded-[16px] w-[88px] h-[36px] flex items-center justify-center`}>
                                <button onClick={() => handleIdChange(group.groupId ,group.groupName)}>{group.groupName}</button>
                            </div>
                        )
                    })}
                </section>
            </div>
            <div>
                <GroupBox groupId={groupSelectedId} groupName={groupName}/>
            </div>
        </div>
    );
};
