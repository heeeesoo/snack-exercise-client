import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex items-center justify-center h-[60px] w-full bg-grayScreen">
            <Link href="/">
                <Image
                src="/logo/logo_small.svg"
                width={108}
                height={24}
                alt="logo"
                />
            </Link>
        </div>
    );
};

export default Header;