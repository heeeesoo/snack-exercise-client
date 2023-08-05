'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
 

export default function NameLogin() {
    const route = useRouter();

    
    const handleClick = () => {
        route.replace('/signup')
    }

    return (
        <div className='flex flex-col items-center justify-center bg-white h-[200px] rounded-[36px]'>
            <div className='font-normal text-[14px] text-SystemGray3 pb-[16px]'>
                스낵을 100% 활용해보세요!
            </div>
            <button className='flex justify-center px-[22px] items-center w-4/5 h-[56px] bg-SystemBrand rounded-[16px]' onClick={handleClick}>
                <div className='font-semibold text-white'>
                    로그인
                </div>
            </button>
            <div className="pt-[10px]"></div>
                <Link
                    href={{
                        pathname: '/signup',
                        query: {
                            name: "signup"
                        },
                    }}
                    className='flex justify-center px-[22px] items-center w-4/5 h-[56px] bg-SystemBrand rounded-[16px]'
                >
                    <div className='font-semibold text-white'>
                        회원가입
                    </div>
                </Link>
        </div>
    )
}
