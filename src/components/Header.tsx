'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <div className="flex items-center justify-center h-[60px] w-full bg-grayScreen">
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
                <Link href="/">
                    <Image
                    src="/logo/logo_small.svg"
                    width={108}
                    height={24}
                    alt="logo"
                    priority
                    />
                </Link>
            }
        </div>
    );
};

export default Header;