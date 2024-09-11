import { Button, Text, Dialog } from '@radix-ui/themes';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

interface Props {}

export type IncorrectDialogRef = {
    open: (numOfCorrect: number) => void;
};

const IncorrectDialog = forwardRef<IncorrectDialogRef, Props>((_props, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [numOfCorrect, setNumOfCorrect] = useState(0);

    useImperativeHandle(ref, () => ({
        open: (numOfCorrect: number) => {
            console.log(numOfCorrect);
            setNumOfCorrect(numOfCorrect);
            buttonRef.current?.click();
        },
    }));

    return (
        <Dialog.Root>
            <div className="hidden">
                <Dialog.Trigger ref={buttonRef}>
                    <Button>Incorrect</Button>
                </Dialog.Trigger>
            </div>

            <Dialog.Content size="3" maxWidth="450px" aria-describedby={undefined} className="text-center">
                <Dialog.Title>Incorrect</Dialog.Title>
                <Text>{`You have ${numOfCorrect}/4 correct, try again`}</Text>
            </Dialog.Content>
        </Dialog.Root>
    );
});
IncorrectDialog.displayName = 'IncorrectDialog';

export default IncorrectDialog;
