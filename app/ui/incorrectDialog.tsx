import { Button, Text, Dialog, Flex } from '@radix-ui/themes';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { incorrectMessages } from '@/app/lib/messages';

interface Props {}

export type IncorrectDialogRef = {
    open: (numOfCorrect: number) => void;
};

const IncorrectDialog = forwardRef<IncorrectDialogRef, Props>((_props, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [numOfCorrect, setNumOfCorrect] = useState(0);
    const [message, setMessage] = useState('');

    useImperativeHandle(ref, () => ({
        open: (numOfCorrect: number) => {
            console.log(numOfCorrect);
            setNumOfCorrect(numOfCorrect);
            setMessage(
                incorrectMessages[numOfCorrect][Math.floor(Math.random() * incorrectMessages[numOfCorrect].length)]
            );
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
                <Text>
                    You have <span className="font-bold">{numOfCorrect}/4</span> correct. {message}
                </Text>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Close
                        </Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
});
IncorrectDialog.displayName = 'IncorrectDialog';

export default IncorrectDialog;
