'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Back } from "@/constant/icon";

const Header = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <div className="flex flex-row items-center justify-center h-[60px] w-full bg-grayScreen">
            {
                pathname === '/signup' ? 
                    `${searchParams}` === 'name=signup' ?
                    <div className="font-bold text-[20px]">
                        회원 가입
                    </div>
                    :
                    <div className="font-bold text-[20px]">
                        로그인
                    </div>
                :
                <div className="flex flex-row items-center justify-between w-9xl">
                    <div className="w-[24px]" onClick={handleClick}>
                        <Image 
                        src={Back}
                        width={24}
                        height={24}
                        alt="back"
                        />
                    </div>
                    <div>
                        <Link href="/">
                            <Image
                            src="/logo/logo_small.svg"
                            width={108}
                            height={24}
                            alt="logo"
                            priority
                            />
                        </Link>
                    </div>
                        <div className="w-[24px]">
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;