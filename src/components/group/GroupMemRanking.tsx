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
  const rankIcon = ['🥇', '🥈', '🥉']
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
            const response = await getDataClient(`/groups/${groupId}/missions/rank?filter=today`);
            setData(response.result.data)
            console.log(response.result.data);
        } catch (error) {
            console.error('Error in fetchData:', error);
        }
    };
    fetchMemRanking();
    setLoading(false);
  }, [groupId])

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
          data.length > 0 ?
          data.map((member : any, idx: number) => {
            return(
              <div key={member.nickname} className='border border-gray-200 shadow bg-white mb-[12px] h-[92px] rounded-[16px] flex items-center justify-between px-[20px]'>
                <div className='flex items-center justify-center'>
                  <div className='text-[40px]'>
                    {
                      member.profileImage === null ?
                      '😀'  
                      :
                      member.profileImage
                    }
                  </div>
                  <div className='flex flex-col pl-[16px]'>
                    <div className='text-SystemGray1'>
                      {member.nickname}
                    </div>
                    <div className='text-[12px] text-SystemGray3'>
                      {member.avgMissionExecutionTime}분
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center w-[40px] text-[40px]'>
                  {
                    idx<3 ?
                    rankIcon[idx]
                    :
                    <div className='text-[30px]'>
                      {idx+1}
                    </div>
                  }
                </div>
              </div>
            )
          })
          :
          <div className='border border-gray-200 shadow bg-white h-[70px] rounded-[12px] flex items-center justify-center font-bold px-[10px] text-SystemGray3'>
            미션을 수행해주세요!
          </div>
        }
    </div>
    </div>
  )
}
