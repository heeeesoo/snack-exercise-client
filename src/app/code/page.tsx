'use client'
import InputBox from "@/components/common/inputBox/InputBox"
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { BasicButton } from "@/components/common/Button";
import TokenStore from "@/store/TokenStore";
import { useRouter } from "next/navigation";

interface FormData {
    code: string;
}

export default function Code() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
        watch
    } = useForm<FormData>(); 
    const router = useRouter();

    const onSubmit = async (data: FormData) => {
        try {
            const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/groups/join/code`;
            // const apiUrl = `/api/sign-up`; 
        
            const formDataToSend = {
                code: data.code,
            };

            console.log(formDataToSend)
        
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    'Authorization': TokenStore.getState().token
                },
                body: JSON.stringify(formDataToSend),
            });

            console.log(response);

            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
        
            const responseData = await response.json();
            console.log('Server response:', responseData);
            alert('그룹이 가입되었습니다!');
            router.replace('/group');

        } catch (error) {
            console.error('Error while submitting form data:', error);
            alert('Failed to submit form data. Please try again.');
        }
    };
    
    return (
        <div className="relative flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-between min-h-[85vh]">
                <InputBox title="초대코드를 입력해주세요" label="초대코드를 입력해주세요" name="code" register={register} error={errors.code?.message} type="number"/>
                <BasicButton type="submit" label="확인"/>
            </form>
        </div>
    )
}
