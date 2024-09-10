import Image from 'next/image';
import { Button, Flex, Text, Dialog } from '@radix-ui/themes';
import { Person } from '../lib/definitions';
import PersonBox from './personBox';

type Props = {
    people: Person[];
};

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export type SolutionDialogRef = {
    open: () => void;
};

const colors = ['bg-red-400', 'bg-red-300', 'bg-red-200', 'bg-red-100'];

const SolutionDialog = forwardRef<SolutionDialogRef, Props>(({ people }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [solved, setSolved] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => {
            setSolved(true);
            buttonRef.current?.click();
        },
    }));

    function handleOpenChange(open: boolean) {
        if (!open) {
            setSolved(false);
        }
    }

    const title = solved ? 'You got it!' : 'Who is more famousbirthdays.com?';

    return (
        <Dialog.Root onOpenChange={handleOpenChange}>
            <Dialog.Trigger ref={buttonRef}>
                <Button size="2" variant="soft" highContrast>
                    Solution
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px" aria-describedby={undefined}>
                <Dialog.Title>{title}</Dialog.Title>

                <Flex direction="column" gap="3">
                    <ol className="flex flex-col py-4">
                        {people.map((person, idx) => (
                            <li key={idx} className={colors[idx]}>
                                <Flex p="4">
                                    <PersonBox person={person} idx={idx}></PersonBox>
                                    <Flex
                                        width="60px"
                                        height="60px"
                                        align="center"
                                        justify="center"
                                        className="flex-none"
                                    >
                                        <Image
                                            src="/famous-birthdays-star-200.webp"
                                            alt="star"
                                            width="60"
                                            height="60"
                                            priority
                                        ></Image>
                                        <Text size="2" className="text-white absolute -ml-[4px]">
                                            {person.rank}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </li>
                        ))}
                    </ol>
                </Flex>

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
SolutionDialog.displayName = 'SolutionDialog';

export default SolutionDialog;
