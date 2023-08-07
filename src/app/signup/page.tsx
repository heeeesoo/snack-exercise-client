'use client'
import InputBox from "@/components/common/inputBox/InputBox"
import { useForm } from 'react-hook-form';
import { BasicButton } from "@/components/common/Button";
import UserStore from '@/store/UserStore';
import { useRouter } from "next/navigation";
import TokenStore from "@/store/TokenStore";
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

interface FormData {
    nickname: string;
}

export default function SignUp() {
    const [fcmToken, setFcmToken] = useState<string>('')
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const getToken = async() => {
        const messaging = firebase.messaging();
        const token = await messaging.getToken({
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });
    
    return token;
    }
    
    useEffect(() => {
        async function getMessageToken() {
            const token = await getToken();
            console.log('fcm token:',token);
            setFcmToken(token);
        }
        getMessageToken();
    }, []);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>(); 

    const {isLoggedIn, login, logout} = UserStore();
    const {token, setToken, setMemberId, setMemberName} = TokenStore();
    const router = useRouter();
    const searchParams = useSearchParams()

    const onSubmit = async (data: FormData) => {
        try {
            const apiUrl = `${searchParams}` === 'name=signup' ? `${process.env.NEXT_PUBLIC_SERVER_URL}/mvp/auth/sign-up` : `${process.env.NEXT_PUBLIC_SERVER_URL}/mvp/auth/login`;
        
            const formDataToSend = {
                nickname: data.nickname,
                fcmToken: fcmToken
            };

            console.log(formDataToSend)
        
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                },
                body: JSON.stringify(formDataToSend),
            });

            console.log(response);

            if (!response.ok) {
                if (response.status === 409) {
                    // router.replace('/signup');
                    throw new Error('이미 가입된 사용자입니다. 로그인 페이지에서 진행해주세요.');
                } else {
                    throw new Error('Failed to submit form data');
                }
            } else {
                const responseData = await response.json();
                console.log('Server response:', responseData);
                setToken(responseData.result.data.accessToken);
                setMemberId(responseData.result.data.id);
                setMemberName(data.nickname);
            }
        
            login();
            router.replace('/');

        } catch (error) {
            console.error('Error while submitting form data:', error);
            alert('Failed to submit form data. Please try again.');
        }
    };

    return (
        <div className="relative flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-between min-h-[85vh]">
                <InputBox title="이름을 입력해주세요" label="nickname" name="nickname" register={register} error={errors.nickname?.message}/>
                <BasicButton type="submit" label="확인"/>
            </form>
        </div>
    )
}
