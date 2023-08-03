'use client'
import UserStore from "@/store/UserStore";
import TokenStore from "@/store/TokenStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const {isLoggedIn, login, logout} = UserStore();
    const {removeTokenMemId} = TokenStore();
    const router = useRouter();

    useEffect(()=>{
        if(!isLoggedIn){
            router.replace('/login')
        }
    },[isLoggedIn])

    const handleClick = () => {
        logout();
        removeTokenMemId();
    }

    return (
        <div>
            <button onClick={handleClick}>로그아웃</button>
        </div>
    );
};

export default Page;