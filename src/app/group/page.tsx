'use client'
import GroupBox from "@/components/group/GroupBox";
import { useState, useEffect } from "react";
import {getDataClient} from "@/utils/getDataClient";
import TokenStore from "@/store/TokenStore";

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
    const {memberId} = TokenStore();

    useEffect(() => {
        const fetchMyGroupListData = async () => {
          try {
                const result = await getDataClient('/groups');
                console.log('mygrouplist:',result);
                result.result.data && setGroupMyList(result.result.data);
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

    return (
        <div className="flex flex-col items-center pt-[15px]">
            <div className="flex flex-row overflow-auto w-screen max-w-[400px] h-auto  no-scrollbar">
                <section className="flex flex-row h-[36px] ml-[5%]">
                    {
                        groupMyList && groupMyList.length > 0 ?
                        groupMyList?.map((group : GroupType) => {
                            return (
                                <div key={group.groupId} className={`${group.groupId === groupSelectedId ? 'bg-SystemDarkBlue text-white' : 'text-SystemGray9 border-[1px] border-SystemGray9'}  mr-[8px] rounded-[16px] w-[90px] h-[36px] flex items-center justify-center relative`}>
                                    <button onClick={() => handleIdChange(group.groupId, group.groupName, group.currentMissionMemberId)}>{group.groupName}</button>
                                    {group.currentMissionMemberId === memberId && (
                                        <div className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 text-xs text-white bg-red-600 rounded-full"></div>
                                    )}
                                </div>
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
                    <div className="text-[100px]">
                        🥹
                    </div>
                    <div className="text-SystemGray2">
                        참여하고 있는 그룹이 없습니다
                    </div>
                </div>
            }
        </div>
    );
};
 
  