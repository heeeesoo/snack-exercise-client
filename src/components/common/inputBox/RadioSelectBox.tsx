'use client';

import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface RadioSelectBoxProps {
    value: string;
    name: string;
    register: UseFormRegister<any>; // 또는 UseFormRegister<FormData> 등 필요한 타입으로 지정
    error?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    checkvalue: string;
}

export default function RadioSelectBox({ 
    value,
    name,
    register,
    error,
    defaultChecked,
    disabled,
    checkvalue
 } : RadioSelectBoxProps) {
    return (
        <div className="flex items-center justify-between w-9xl text-[16px] rounded-xl h-[60px] mt-[10px] pl-[14px] bg-white text-SystemGray2">
            {checkvalue}
            <input
                className="w-[16px] h-[16px] m-[20px]"
                type="radio"
                {...register(name, {
                })}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
        </div>
    );
}
