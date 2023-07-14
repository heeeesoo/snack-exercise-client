interface InputProps {
    type: string;
    id: string;
    name: string;
    title: string;
    subtitle?: string;
    placeholder?: string;
}

interface SelectInputBoxProps {
    value: string;
    radioname: string;
    inputname: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

interface RadioSelectBoxProps {
    value: string;
    name: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    children: string;
}


export function InputBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder
 } : InputProps) {
    return (
        <div className="flex flex-col w-4/5 text-[16px] text-SystemGray">
            <div className="flex items-center justify-between">
                <label htmlFor={name}>{title}</label>
                <div className="text-SystemBrand text-[12px]">{subtitle}</div>
            </div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                className="rounded-xl mt-[10px] h-[60px] pl-[14px] text-SystemGray1 placeholder-SystemGray4 outline-grayScreen"
                placeholder={placeholder}
            />
        </div>
    );
}

export function SelectBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder
 } : InputProps) {
    return (
        <div className="flex flex-col w-4/5 text-[16px] text-SystemGray2">
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

export function SelectInputBox({ 
    value,
    radioname,
    inputname,
    defaultChecked,
    disabled,
    placeholder
 } : SelectInputBoxProps) {
    return (
        <div className="flex justify-between w-4/5 text-[16px] rounded-xl h-[60px] mt-[10px] pl-[14px] bg-white">
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

export function RadioSelectBox({ 
    value,
    name,
    defaultChecked,
    disabled,
    children
 } : RadioSelectBoxProps) {
    return (
        <div className="flex items-center justify-between w-4/5 text-[16px] rounded-xl h-[60px] mt-[10px] pl-[14px] bg-white text-SystemGray2">
            {children}
            <input
                className="w-[16px] h-[16px] m-[20px]"
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
        </div>
    );
}

export function SearchBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder
 } : InputProps) {
    return (
        <div className="flex flex-col w-4/5 text-[16px]">
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
