'use client'
import {getDataClient} from "@/utils/getDataClient";
import { useState, useEffect } from "react";

interface GroupFinishType {
    endDate : string;
    finishedRelayNum : number;
    goalRelayNum : number;
    groupId : number;
    groupName : string;
    isGoalAchieved : boolean;
    startDate : string;
}

const Page = () => {
    const [groupFinishList, setGroupFinishListh] = useState<GroupFinishType[]>();
    const [isFetch, setIsFetch] = useState(false);
    useEffect(() => {
        const fetchMyGroupListData = async () => {
          try {
                const result = await getDataClient('/groups/finish');
                console.log('mygrouplist:',result);
                result.result.data && setGroupFinishListh(result.result.data);
                setIsFetch(true);
            } catch (error) {
                console.error('Error in fetchData:', error);
            }
        };
        fetchMyGroupListData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-start h-[80vh] w-screen max-w-[400px] pt-[20px]">
            {
                isFetch ?
                    groupFinishList && groupFinishList.length > 0 
                    ?
                    groupFinishList.map((group : GroupFinishType) => {
                        return(
                            <div key={group.groupId} className="bg-white w-9xl h-[60px] rounded-[16px] mb-[5px] flex justify-between items-center px-[15px]">
                                <div className="font-bold">
                                    {group.groupName}
                                </div>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="pr-[10px] text-[12px] text-SystemGray3">
                                        릴레이 총 {group.finishedRelayNum-1} / {group.goalRelayNum}회
                                    </div>
                                    <div className="w-[50px] bg-SystemBrand text-white rounded-md flex items-center justify-center">
                                        {group.isGoalAchieved ? '성공' : '실패'}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : 
                    <div>
                        아직 완료된 그룹이 없습니다
                    </div>
                :
                    <div>Loading...</div>
            }
        </div>
    );
};

export default Page;