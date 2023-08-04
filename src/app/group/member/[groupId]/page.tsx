'use client'
import {getDataClient} from "@/utils/getDataClient";
import { useEffect, useState } from "react";

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
        <div>
            {
                data && data.length > 0 ?
                data.map((member : any) => {
                    return(
                        <div key={member.nickname}>
                            {member.nickname}
                            {member.joinType}
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}
