"use client"

import { NavLinks } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import UserStore from "@/store/UserStore";
import useGetFromStore from "@/store/ZustandHook";

const Footer = () => {
    const pathname = usePathname();
    const {isLoggedIn, login, logout} = UserStore();
    const loginStore = useGetFromStore(UserStore, (state) => state.isLoggedIn);

    return (
        <div>
        {
            pathname === '/login' || pathname === '/group/create' ?
            null
            :
            <div className="flex items-center h-[60px] w-full px-[10px] bg-white">
                <div className="flex w-full justify-evenly">
                    {
                        NavLinks.map((link) => {

                            const isSelected = pathname == link.href ? true : false;
                            return(
                                <Link href={link.href} key={link.key} className="flex flex-col items-center justify-center w-1/4">
                                    <Image 
                                        src={isSelected ? link.imgActive : link.img}
                                        width={24}
                                        height={24}
                                        alt="footer"
                                    />
                                    <div className={`${isSelected ? 'text-SystemBrand' : 'text-SystemGray4'} text-[12px]`}>
                                        {link.text}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        }
        </div>
    );
};

export default Footer;