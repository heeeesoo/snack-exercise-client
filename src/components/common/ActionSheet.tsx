'use client';

import Sheet from 'react-modal-sheet';
import { useRef } from 'react';

interface ActionSheetProps {
    open: boolean;
    onClose: () => void;
}

const ActionSheet = ({
    open,
    onClose,
}:ActionSheetProps) => {

    return (
        <div>
            <Sheet isOpen={open} onClose={onClose} snapPoints={[500, 400, 100, 0]}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>test</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </div>
    );
};

export default ActionSheet;