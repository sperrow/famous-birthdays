import Image from 'next/image';
import { Button, Flex, Text, Dialog, Quote } from '@radix-ui/themes';
import { Person } from '@/app/lib/definitions';
import PersonBox from '@/app/ui/personBox';
import { solutionMessages } from '../lib/messages';

type Props = {
    people: Person[];
};

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export type SolutionDialogRef = {
    open: () => void;
};

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
    const message = solutionMessages[Math.floor(Math.random() * solutionMessages.length)];

    return (
        <Dialog.Root onOpenChange={handleOpenChange}>
            <Dialog.Trigger ref={buttonRef}>
                <Button size="2" variant="soft" highContrast>
                    Solution
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px" aria-describedby={undefined}>
                <Dialog.Title align="center">{title}</Dialog.Title>

                <Flex direction="column" gap="3" py="4">
                    <ol className="flex flex-col divide-y-2 divide-yellow-300 border-2 border-yellow-300 dark:divide-yellow-500 dark:border-yellow-500">
                        {people.map((person, idx) => (
                            <li key={idx} className={idx === 0 ? 'bg-yellow-300 dark:bg-yellow-500' : ''}>
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
                    {solved && (
                        <Text size="2" align="center" mt="4">
                            <Quote>{message}</Quote>
                        </Text>
                    )}
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
