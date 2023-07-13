'use client';
import {InputBox} from "@/components/InputBox";

const page = () => {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
     
        const data = {
            groupname: event.currentTarget.groupname.value,
            last: event.currentTarget.last.value,
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
            <InputBox type="text" id="color" name="color" title="그룹 색상을 선택해주세요"/>
            <InputBox type="text" id="maxMemberNum" name="maxMemberNum" title="제한 인원수를 입력해주세요" subtitle="제한 6명"/>
            <InputBox type="text" id="goalRelayPeriod" name="goalRelayPeriod" title="목표 릴레이 기간은 입력해주세요"/>
            <InputBox type="text" id="goalRelayCount" name="goalRelayCount" title="목표 릴레이 횟수를 입력해주세요"/>
            <InputBox type="text" id="starttime" name="starttime" title="시작 시간을 입력해주세요"/>
            <InputBox type="text" id="endtime" name="endtime" title="끝 시간을 입력해주세요"/>
        
            <button type="submit">Submit</button>
        </form>
    );
};

export default page;