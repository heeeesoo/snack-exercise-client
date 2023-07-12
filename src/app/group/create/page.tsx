'use client';
import Input from "@/components/Input";

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
        <form action="/api/form" method="post" className="flex flex-col" onSubmit={handleSubmit}>
            <Input type="text" id="groupname" name="groupname" text="그룹명을 입력해주세요."/>
        
            <label htmlFor="last">Last Name</label>
            <input type="text" id="last" name="last" required />

        
            <button type="submit">Submit</button>
        </form>
    );
};

export default page;