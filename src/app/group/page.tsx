'use client'
import GroupBox from "@/components/group/GroupBox";
import { useState, useEffect } from "react";
import {getDataClient} from "@/utils/getDataClient";
import TokenStore from "@/store/TokenStore";
import { nogroup } from "@/constant/icon";
import Image from "next/image";
import SkeletonLine from "@/components/loading/SkeletonLine";

interface GroupType {
    groupId: number;
    groupName: string;
    currentMissionMemberId: null | number;
}

// function 이름 -> getGroups() 접근자 신경써서 붙이기
export default function Group() {
    const [groupSelectedId, setGroupSelectedId] = useState<number>(-1);
    const [groupSelectedName, setGroupSelectedName] = useState<string>('');
    const [groupCurMissionId, setGroupCurMissionId] = useState<number | null>(-1);
    const [groupMyList, setGroupMyList] = useState<GroupType[]>();
    const [loading, setLoading] = useState(true);
    const {memberId} = TokenStore();

    useEffect(() => {
        const fetchMyGroupListData = async () => {
          try {
                const result = await getDataClient('/groups');
                console.log('mygrouplist:',result);
                result.result.data && setGroupMyList(result.result.data);
                setLoading(false);
            } catch (error) {
                console.error('Error in fetchData:', error);
            }
        };
        fetchMyGroupListData();
    }, []);

    useEffect(() => {
        if (groupMyList && groupMyList.length > 0) {
            setGroupSelectedId(groupMyList[0].groupId);
            setGroupSelectedName(groupMyList[0].groupName);
            setGroupCurMissionId(groupMyList[0].currentMissionMemberId)
        }
    },[groupMyList])

    const handleIdChange = (newId : number, newName: string, newCurId: null|number) => {
        setGroupSelectedId(newId);
        setGroupSelectedName(newName);
        setGroupCurMissionId(newCurId);
    };

    if (loading) return (<div className="pt-[20px] mx-[20px]"><SkeletonLine /></div>)

    return (
        <div className="flex flex-col items-center py-[20px]">
            <div className="flex flex-row overflow-auto w-screen max-w-[400px] h-auto no-scrollbar">
                <section className="flex flex-row h-[36px] ml-[5%]">
                    {
                        groupMyList && groupMyList.length > 0 ?
                        groupMyList?.map((group : GroupType) => {
                            return (
                                <button key={group.groupId} 
                                onClick={() => handleIdChange(group.groupId, group.groupName, group.currentMissionMemberId)}
                                className={`${group.groupId === groupSelectedId ? 'bg-SystemDarkBlue text-white' : 'text-SystemGray9 border-[1px] border-SystemGray9'}  mr-[8px] rounded-[16px] w-[100px] h-[36px] flex items-center justify-center relative`}>
                                    <div >{group.groupName}</div>
                                    {group.currentMissionMemberId === memberId && (
                                        <div className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 text-xs text-white rounded-full bg-SystemRed"></div>
                                    )}
                                </button>
                            )
                        })
                        :
                        null
                    }
                </section>
            </div>
            {
                groupMyList && groupMyList.length > 0 ?   
                <div>
                    <GroupBox groupId={groupSelectedId} groupName={groupSelectedName} currentMissionMemberId={groupCurMissionId}/>
                </div>
                :
                <div className="flex h-[50vh] flex-col items-center justify-center">
                    <div className="text-[100px] pb-[20px]">
                        <Image src={nogroup} width={100} height={100} alt="nogroup" />
                    </div>
                    <div className="font-semibold text-SystemGray2">
                        참여하고 있는 그룹이 없습니다
                    </div>
                </div>
            }
        </div>
    );
};
 
  