'use client'
import { useState, useEffect } from 'react'

interface GroupCardProps {
    groupId : number;
}

// useEffect hook data fetch group mission card
export default function GroupCard({
    groupId
} : GroupCardProps) {
    const [data, setData] = useState<any>(null)
    const [isLoading, setLoading] = useState(true)


    // /exgroups/{exgroupId}/missions
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            const fakeData = {
                "missionFlow": [
                  {
                    "memberId": 0,
                    "memberName": "string",
                    "profileImage": "string",
                    "startAt": "2023-07-29T23:11:28.882Z",
                    "endAt": "2023-07-29T23:11:28.882Z"
                  },
                  {
                    "memberId": 1,
                    "memberName": "string",
                    "profileImage": "string",
                    "startAt": "2023-07-29T23:13:28.882Z",
                    "endAt": "2023-07-29T23:11:28.882Z"
                  },
                  {
                    "memberId": 2,
                    "memberName": "string",
                    "profileImage": "string",
                    "startAt": "2023-07-29T23:15:28.882Z",
                    "endAt": "2023-07-29T23:11:28.882Z"
                  },
                  {
                    "memberId": 3,
                    "memberName": "string",
                    "profileImage": "string",
                    "startAt": "2023-07-29T23:17:28.882Z",
                    "endAt": "2023-07-29T23:11:28.882Z"
                  }
                ],
                "finishedRelayCount": 0,
                "exgroupEndDate": "2023-07-29"
            }
            setData(fakeData)
            setLoading(false)
        })
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>


    return (
        <div>
            {
                data.missionFlow.map((mission : any) => {
                    return(
                        <div key={mission.startAt}>
                            {mission.memberId}
                        </div>
                    )
                })
            }
        
        </div>
    )
}
