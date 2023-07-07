'use client'

interface ButtonProps {
    label: string;
    type: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    type,
    onClick
}) => {
    return (
        <div className={`${type==='mission' ? 'w-32' : 'w-3/4'} h-10 leading-10 text-center rounded-md bg-cyan-300`}>
            <button onClick={onClick}>
                {label}
            </button> 
        </div>
    );
}; 

export default Button;