'use client';
import {InputBox, SelectBox, SelectInputBox, RadioSelectBox} from "@/components/common/InputBox";
import { BasicButton } from "@/components/common/Button";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const handlePush = () => {
        router.push('/group/title');
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
     
        const data = {
            groupname: event.currentTarget.groupname.value,
            penalty: event.currentTarget.penalty.value ? event.currentTarget.penalty.value : event.currentTarget.penaltyOther.value
        }
        
        console.log(data);
        
        // const JSONdata = JSON.stringify(data)
     
        // const endpoint = '/api/form'
     
        // const options = {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSONdata,
        // }
     
        // const response = await fetch(endpoint, options)
     
        // const result = await response.json()
        // alert(`Is this your full name: ${result.data}`)
    }

    return (
        <form action="/api/form" method="post" className="flex flex-col items-center" onSubmit={handleSubmit}>
            <InputBox type="text" id="groupname" name="groupname" title="그룹명을 입력해주세요" placeholder="그룹명"/>
            <div className="mb-[40px]"></div>
            <SelectBox type="text" id="color" name="color" title="그룹 색상을 선택해주세요"/>
            <div className="mb-[40px]"></div>
            <InputBox type="text" id="maxMemberNum" name="maxMemberNum" title="제한 인원수를 입력해주세요" subtitle="제한 6명" placeholder="제한 인원 수"/>
            <div className="mb-[40px]"></div>
            <InputBox type="text" id="goalRelayPeriod" name="goalRelayPeriod" title="목표 릴레이 기간은 입력해주세요" placeholder="목표 릴레이 기간"/>
            <div className="mb-[40px]"></div>
            <InputBox type="text" id="goalRelayCount" name="goalRelayCount" title="목표 릴레이 횟수를 입력해주세요" placeholder="제한 인원 수"/>
            <div className="mb-[40px]"></div>
            <InputBox type="text" id="starttime" name="starttime" title="시작 시간을 입력해주세요" placeholder="시작 시간"/>
            <div className="mb-[40px]"></div>
            <InputBox type="text" id="endtime" name="endtime" title="끝 시간을 입력해주세요" placeholder="끝 시간"/>
            <hr className="w-4/5 duration-500 my-[40px] border-1 border-[#EEEEFE] cursor-pointer"/>
            <div className="flex flex-col w-4/5">
                <div className="text-left text-SystemGray2 text-[16px]">
                    벌칙을 선택해주세요
                </div>
                <div className="text-SystemGray3 text-[12px]">
                    미션 기간이 끝나고난 후 미션 할당 받고 수행까지의 시간이 
                    평균적으로 가장 오래 걸린 사람이 벌칙을 받습니다.
                </div>
            </div>
            <SelectInputBox value="" radioname="penalty" inputname="penaltyOther" placeholder="벌칙 직접 입력"/>
            <RadioSelectBox value="아웃백" name="penalty" checkvalue="아웃백 쏘기"/>
            <RadioSelectBox value="아이스크림" name="penalty" checkvalue="아이스크림 쏘기"/>
            <hr className="w-4/5 duration-500 my-[40px] border-1 border-[#EEEEFE] cursor-pointer"/>
            <SelectBox type="text" id="color" name="color" title="미션 독촉 알림 시간 간격을 선택해주세요" placeholder="미션 독촉 알림 시간 간격"/>
            <div className="mb-[40px]"></div>
            <InputBox type="text" id="endtime" name="endtime" title="미션 독촉 알림 최대 횟수를 입력해주세요" placeholder="미션 독촉 알림 최대 횟수"/>
            <BasicButton type="submit" label="그룹 만들기" onClick={handlePush}/>
        </form>
    );
};

export default Page;