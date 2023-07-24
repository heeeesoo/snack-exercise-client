'use client';

import Sheet from 'react-modal-sheet';
import { useRef } from 'react';

interface ActionSheetProps {
    open: boolean;
    onClose: () => void;
    text: string;
}

const ActionSheet = ({
    open,
    onClose,
    text
}:ActionSheetProps) => {

    return (
        <div>
            <Sheet isOpen={open} onClose={onClose} snapPoints={[500, 400, 100, 0]}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>{text}</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </div>
    );
};

export default ActionSheet;