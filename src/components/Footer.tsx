import { NavLinks } from "@/constant";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex items-center h-[60px] shadow w-full px-[10px]">
            <div className="flex w-full justify-evenly">
                {
                    NavLinks.map((link)=>(
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Footer;