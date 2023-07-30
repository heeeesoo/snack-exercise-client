'use client'
import { useState, useEffect } from 'react'

interface GroupMemRankingProps {
  groupId : number;
}

export default function GroupMemRanking({
  groupId
} : GroupMemRankingProps) {
  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(true)

  // /exgroups/{exgroupId}/missions/rank
  // 당일 미션 랭킹 조회
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        setData(data)
        const fakeData = {
          data: [
            {
              "nickname": "한유진",
              "profileImage": "🥹",
              "avgMissionExecutionTime": 0,
              "missionCount": 0
            },
            {
              "nickname": "김민정",
              "profileImage": "🥰",
              "avgMissionExecutionTime": 0,
              "missionCount": 0
            },
            {
              "nickname": "오진서",
              "profileImage": "😝",
              "avgMissionExecutionTime": 0,
              "missionCount": 0
            },
          ],
        }
        setData(fakeData)
        setLoading(false)
    })
}, [])

if (isLoading) return <p>Loading...</p>
if (!data) return <p>No profile data</p>

  return (
    <div>
      <div className='flex items-center'>
        <div className='font-bold text-[20px]'>
          개인 랭킹 
        </div>
        <div className='text-SystemGray3 ml-[12px]'>
          7월 30일
        </div>
      </div>
      <div>
        {
          data.data.map((member : any) => {
            return(
              <div key={member.nickname} className='bg-white mb-[12px] h-[92px] rounded-[16px] flex items-center px-[20px]'>
                <div className='text-[40px]'>
                  {member.profileImage}
                </div>
                <div className='flex flex-col pl-[16px]'>
                  <div className='text-SystemGray1'>
                    {member.nickname}
                  </div>
                  <div className='text-[12px] text-SystemGray3'>
                    00:27
                    {/* {member.avgMissionExecutionTime} */}
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
    </div>
  )
}
