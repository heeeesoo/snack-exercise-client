import React, { useState, ChangeEvent } from 'react';

interface RadioSelectBoxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  isOther?: boolean;
}

const RadioSelectBox: React.FC<RadioSelectBoxProps> = ({
  label,
  value,
  checked,
  onChange,
  isOther,
}) => {

  return (
    <div className='flex items-center justify-center w-screen' >
        <div className="flex items-center justify-between w-9xl text-[16px] rounded-xl h-[60px] mt-[10px] pl-[14px] bg-white text-SystemGray2">
            {label}
            <input
                type="radio"
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
                className="w-[16px] h-[16px] m-[20px]"
            />
        </div>
    </div>
  );
};

export default RadioSelectBox;
