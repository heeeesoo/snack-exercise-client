interface ButtonProps {
    label: string;
    type: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface BlurTitleButtonProps {
    title: string;
    subtitle: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export function Button({ 
    label,
    type,
    onClick
 } : ButtonProps) {
    return (
        <div className={`${type==='mission' ? 'w-32' : 'w-3/4'} h-10 leading-10 text-center rounded-md bg-cyan-300`}>
            <button onClick={onClick}>
                {label}
            </button> 
        </div>
    );
}

export function BlurTitleButton({
    title,
    subtitle,
    onClick
} : BlurTitleButtonProps){
    return(
        <button onClick={onClick} className="w-5/6 bg-white">
            d
        </button>
    )
}