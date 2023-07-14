"use client"

import { NavLinks } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div className="flex items-center h-[60px] w-full px-[10px] bg-white">
            <div className="flex w-full justify-evenly">
                {
                    NavLinks.map((link)=>(
                        <Link href={link.href} key={link.key} className="flex flex-col items-center justify-center w-1/4">
                            <Image 
                                src={link.img}
                                width={24}
                                height={24}
                                alt="footer"
                            />
                            <div className="text-[12px]">
                                {link.text}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Footer;