interface SelectBoxProps {
    name: string;
    title: string;
    subtitle?: string;
    onOpen: () => void;
    value?: string;
}

export default function SelectBox({ 
    name, 
    title,
    subtitle,
    onOpen,
    value
 } : SelectBoxProps) {
    return (
        <div className="flex flex-col w-9xl text-[16px] text-SystemGray2" onClick={onOpen}>
            <div className="flex ">
                <label htmlFor={name}>{title}</label>
                <div>{subtitle}</div>
            </div>
            <div className="rounded-xl h-[60px] mt-[10px] pl-[14px] bg-white flex items-center">
                {value}
            </div>
        </div>
    );

}
