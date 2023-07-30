'use client'
import UserStore from "@/store/UserStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const {isLoggedIn, login, logout} = UserStore();
    const router = useRouter();

    useEffect(()=>{
        if(!isLoggedIn){
            router.replace('/login')
        }
    },[isLoggedIn])

    return (
        <div>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

export default Page;