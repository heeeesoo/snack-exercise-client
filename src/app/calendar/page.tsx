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
                                <div className="">
                                    {group.groupName}
                                </div>
                                <div className="w-[30px] bg-SystemBrand text-white">
                                    {group.isGoalAchieved ? '성공' : '실패'}
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