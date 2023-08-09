'use client'
import UserStore from "@/store/UserStore";
import TokenStore from "@/store/TokenStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BasicButton } from "@/components/common/Button";

const Page = () => {
    const {isLoggedIn, login, logout} = UserStore();
    const {removeTokenMemId, memberName} = TokenStore();
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
        <div className="flex flex-col justify-center items-center h-[70vh]">
            <div className="text-[100px]">
                😀
            </div>
            <div className="font-bold text-[28px] pb-[100px]">
                {memberName}
            </div>
            <BasicButton onClick={handleClick} label="로그아웃" type="button"/>
        </div>
    );
};

export default Page;