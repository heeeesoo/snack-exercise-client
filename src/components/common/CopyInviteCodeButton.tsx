import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { BasicButton } from './Button';

interface CopyInviteCodeButtonProps {
  inviteCode: string;
}

const CopyInviteCodeButton: React.FC<CopyInviteCodeButtonProps> = ({ inviteCode }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        copy(inviteCode);
        setIsCopied(true);

        // 일정 시간 후 복사 상태 초기화
        setTimeout(() => {
        setIsCopied(false);
        }, 2000);
    };

    return (
        <BasicButton label={isCopied ? '복사됨' : '초대 코드 복사'} onClick={handleCopy} type='button'/>
    );
};

export default CopyInviteCodeButton;
