import Image from "next/image";

const Header = () => {
    return (
        <div className="flex items-center justify-center h-[60px] w-full bg-grayScreen">
            <Image
            src="/logo/logo_small.svg"
            width={108}
            height={24}
            alt="logo"
            />
        </div>
    );
};

export default Header;