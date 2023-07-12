interface InputProps {
    type: string;
    id: string;
    name: string;
    text: string;
}

const Input: React.FC<InputProps> = ({
    type,
    id,
    name,
    text
}) => {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <input type={type} id={id} name={name} />
        </div>
    );
};

export default Input;