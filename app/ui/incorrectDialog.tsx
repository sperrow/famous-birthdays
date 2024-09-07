import { Button, Text, Dialog } from '@radix-ui/themes';
import { forwardRef, useImperativeHandle, useRef } from 'react';

interface Props {}

export type IncorrectDialogRef = {
    open: () => void;
};

const IncorrectDialog = forwardRef<IncorrectDialogRef, Props>((_props, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
        open: () => {
            console.log('hi');
            buttonRef.current?.click();
        },
    }));

    return (
        <Dialog.Root>
            <div className="hidden">
                <Dialog.Trigger ref={buttonRef}>
                    <Button size="3" variant="soft">
                        Incorrect
                    </Button>
                </Dialog.Trigger>
            </div>

            <Dialog.Content size="3" maxWidth="450px">
                <Dialog.Title>Incorrect</Dialog.Title>
                <Text>Try Again</Text>
            </Dialog.Content>
        </Dialog.Root>
    );
});
IncorrectDialog.displayName = 'IncorrectDialog';

export default IncorrectDialog;
