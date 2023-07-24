'use client';

import Sheet from 'react-modal-sheet';
import { useState, useRef } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

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

interface RadioSelectBoxProps {
    value: string;
    name: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    checkvalue: string;
}


export function InputBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder,
 } : InputProps) {
    return (
        <div className="flex flex-col w-9xl text-[16px] text-SystemGray2">
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

export function SelectInputBox({ 
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

export function RadioSelectBox({ 
    value,
    name,
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
        <div className="flex flex-col w-9xl text-[16px]">
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
