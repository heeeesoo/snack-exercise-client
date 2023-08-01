'use client'
import InputBox from "@/components/common/inputBox/InputBox"
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { BasicButton } from "@/components/common/Button";
import { useEffect } from "react";
// import { headers } from 'next/headers'

interface FormData {
    nickname: string;
}

export default function SignUp() {
    // const headersList = headers()

    // console.log('header:',headersList);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
        watch
    } = useForm<FormData>(); 

    const onSubmit = async (data: FormData) => {
        try {
            // const apiUrl = `${SERVER_URL}api/sign-up`;
            const apiUrl = `https://dev-api.snackexercise.com/api/sign-up`;
        
            const formDataToSend = {
                nickname: data.nickname,
            };

            console.log(formDataToSend)
        
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            });
        
            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
        
            const responseData = await response.json();
            console.log('Server response:', responseData);
            alert('Form data submitted successfully!');

        } catch (error) {
            console.error('Error while submitting form data:', error);
            alert('Failed to submit form data. Please try again.');
        }
    };

    return (
        <div className="relative flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-between min-h-[85vh]">
                <InputBox title="사용할 닉네임을 입력해주세요" label="nickname" name="nickname" register={register} error={errors.nickname?.message}/>
                <BasicButton type="submit" label="확인"/>
            </form>
        </div>
    )
}
