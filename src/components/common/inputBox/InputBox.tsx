'use client';

import { UseFormRegister } from 'react-hook-form';

interface CustomFormInputProps {
    title: string;
    subtitle?: string;
    label: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    defaultValue?: string | number;
    placeholder?: string;
    unit?: string;
    type?: string;
    min?: number | string;
    max?: number | string;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    integerOnly?: boolean;
}

function isInteger(value: any): boolean {
    return Number.isInteger(Number(value));
}

export default function InputBox({
    title,
    subtitle,
    name,
    label,
    register,
    error,
    defaultValue,
    placeholder,
    unit,
    type,
    min,
    max,
    maxLength,
    minValue,
    maxValue,
    integerOnly = false,
}: CustomFormInputProps) {
    const maxLengthValidation = maxLength ? {
        value: maxLength,
        message: `최대 ${maxLength}자까지 입력 가능합니다.`,
    } : undefined;

    const minValidation = minValue !== undefined ? {
        value: minValue,
        message: `최소 값은 ${minValue}입니다.`,
    } : undefined;

    const maxValidation = maxValue !== undefined ? {
        value: maxValue,
        message: `최대 값은 ${maxValue}입니다.`,
    } : undefined;

    const inputType = integerOnly ? 'number' : type;

    const validateInteger = integerOnly ? {
        validate: {
            isInteger: (value: any) => isInteger(value) || '정수만 입력 가능합니다.',
        },
    } : undefined;

    return (
        <div className="flex flex-col w-9xl text-[16px] text-SystemGray2">
            <div className="flex items-center justify-between pb-[3px]">
                <label htmlFor={name}>{title}</label>
                <div className="text-SystemBrand text-[12px]">{subtitle}</div>
            </div>
            <div className="flex justify-between w-full bg-white rounded-xl">
                <input
                    {...register(name, {
                        required: `필수 입력입니다.`,
                        maxLength: maxLengthValidation,
                        min: minValidation,
                        max: maxValidation,
                        ...validateInteger,
                    })}
                    defaultValue={defaultValue}
                    className="focus:outline-none rounded-xl h-[60px] pl-[20px] w-[300px] text-SystemGray1 placeholder-SystemGray4 outline-grayScreen"
                    placeholder={placeholder}
                    type={inputType}
                    min={min}
                    max={max}
                />
                {unit && <span className="flex items-center pr-[20px] text-SystemGray3">{unit}</span>}
            </div>
            {error && <div className="text-red-500 text-[12px] mt-1">{error}</div>}
        </div>
    );
}

