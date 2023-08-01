'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-center h-[60px] w-full bg-grayScreen">
            {
                pathname === '/signup' ? 
                <div>
                    내 정보 입력
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