import Image from "next/image";

const Logo = () => {
    return (
        <div className="text-[35px] px-3">
            <Image
            src="/logo/logo_small.svg"
            width={108}
            height={24}
            alt="logo"
            />
        </div>
    );
};

export default Logo;