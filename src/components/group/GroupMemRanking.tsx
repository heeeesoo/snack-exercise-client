'use client'
import { useState, useEffect } from 'react'
import TokenStore from '@/store/TokenStore';
import { getDataClient } from '@/utils/getDataClient';

interface GroupMemRankingProps {
  groupId : number;
}

export default function GroupMemRanking({
  groupId
} : GroupMemRankingProps) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  const getFormattedDate = (): string => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
  
    return `${month}월 ${day}일`;
  };  

  // /exgroups/{exgroupId}/missions/rank
  // 당일 미션 랭킹 조회
  useEffect(() => {
    const fetchMemRanking = async () => {
      try {
            const result = await getDataClient(`/groups/${groupId}/missions/rank?filter=today`);
            console.log(result);
            // setData(result.result.data)
        } catch (error) {
            console.error('Error in fetchData:', error);
        }
    };
    fetchMemRanking();
    setLoading(false);
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
      <div className='flex items-center pb-[10px]'>
        <div className='font-bold text-[20px]'>
          개인 랭킹 
        </div>
        <div className='text-SystemGray3 ml-[12px]'>
          {getFormattedDate()}
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
