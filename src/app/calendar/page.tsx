'use client'
import {getDataClient} from "@/utils/getDataClient";
import { useState, useEffect } from "react";
import Image from "next/image";
import { nogroup } from "@/constant/icon";
import { Spinner } from "flowbite-react";
import SkeletonLine from "@/components/loading/SkeletonLine";

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
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMyGroupListData = async () => {
          try {
                const result = await getDataClient('/groups/finish');
                console.log('mygrouplist:',result);
                result.result.data && setGroupFinishListh(result.result.data);
                setIsFetch(true);
                setLoading(false);
            } catch (error) {
                console.error('Error in fetchData:', error);
            }
        };
        fetchMyGroupListData();
    }, []);

    if (loading) return (<div className="pt-[20px] mx-[20px]"><SkeletonLine /></div>)

    return (
        <div className="flex flex-col items-center justify-start h-[80vh] w-screen max-w-[400px] pt-[20px]">
            {
                // isFetch ?
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
                    <div className="flex h-[59vh] flex-col items-center justify-center">
                        <div className="text-[100px] pb-[20px]">
                            <Image src={nogroup} width={100} height={100} alt="nogroup" />
                        </div>
                        <div className="font-semibold text-SystemGray2">
                            완료된 그룹이 없습니다
                        </div>
                    </div>
                // :
                //     <div>Loading...</div>
            }
        </div>
    );
};

export default Page;