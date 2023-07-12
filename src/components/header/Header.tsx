import Logo from "./Logo";

const Header = () => {
    return (
        <div className="flex items-center h-[60px] shadow w-full px-[10px]">
            <Logo/>
            snack pot
            <div className="px-2">
                my
            </div>
        </div>
    );
};

export default Header;