'use client'
import UserStore from "@/store/UserStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const {isLogin, userLogin, userLogout} = UserStore();
    const router = useRouter();

    useEffect(()=>{
        if(!isLogin){
            router.replace('/')
        }
    },[isLogin])

    return (
        <div>
            <button onClick={userLogout}>로그아웃</button>
        </div>
    );
};

export default Page;