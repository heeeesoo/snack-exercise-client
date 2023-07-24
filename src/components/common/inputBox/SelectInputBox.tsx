'use client';

interface SelectInputBoxProps {
    value: string;
    radioname: string;
    inputname: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export default function SelectInputBox({ 
    value,
    radioname,
    inputname,
    defaultChecked,
    disabled,
    placeholder
 } : SelectInputBoxProps) {
    return (
        <div className="flex justify-between w-9xl text-[16px] rounded-xl h-[60px] mt-[10px] pl-[14px] bg-white">
            <input 
                className="text-SystemGray1 placeholder-SystemGray4 outline-white"
                name={inputname}
                placeholder={placeholder}
            />
            <input
                className="w-[16px] h-[16px] m-[20px]"
                type="radio"
                value={value}
                name={radioname}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
        </div>
    );
}