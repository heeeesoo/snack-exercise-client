'use client'

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
        >
            {label}
        </button> 
    );
}; 

export default Button;