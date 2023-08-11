'use client'
import {getDataClient} from "@/utils/getDataClient";
import { useEffect, useState } from "react";
import Image from "next/image";
import { host } from "@/constant/icon";

export default function GroupMemberInfo({ params }: { params: { groupId: string } }) {

    const [data, setData] = useState<any>()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMemberInfo = async () => {
            try {
                const response = await getDataClient(`/groups/${params.groupId}/members`);
                console.log(response);
                setData(response.result.data)
            } catch (error) {
                console.log('Error in fetchData:', error)
            }
        }
        fetchMemberInfo()
        setLoading(false)
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className="flex flex-col justify-center items-center pt-[15px]">
            {
                data && data.length > 0 ?
                data.map((member : any) => {
                    return(
                        <div key={member.nickname} className="w-9xl pb-[10px] h-[76px] flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="text-[44px] pr-[16px]">
                                    😀
                                </div>
                                <div className="text-[16px] font-semibold">
                                    {member.nickname}
                                </div>
                            </div>
                            <div>
                                {member.joinType === 'HOST' ? 
                                <Image 
                                src={host}
                                width={65}
                                height={28}
                                alt="host"
                                />
                                :
                                null
                                }
                            </div>
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}
