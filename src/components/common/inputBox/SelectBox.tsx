interface SelectBoxProps {
    type: string;
    id: string;
    name: string;
    title: string;
    subtitle?: string;
    placeholder?: string;
    onOpen: () => void;
    onClose: () => void;
}

export default function SelectBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder,
    onOpen,
    onClose
 } : SelectBoxProps) {
    return (
        <div className="flex flex-col w-9xl text-[16px] text-SystemGray2" onClick={onOpen}>
            <div className="flex ">
                <label htmlFor={name}>{title}</label>
                <div>{subtitle}</div>
            </div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                className="rounded-xl h-[60px] mt-[10px] pl-[14px]"
                placeholder={placeholder}
            />
        </div>
    );

}
