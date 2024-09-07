import Image from 'next/image';
import { Button, Flex, Text, Dialog } from '@radix-ui/themes';
import { Person } from '../lib/definitions';
import PersonContainer from './personBox';

type Props = {
    people: Person[];
};

export default function SolutionDialog({ people }: Props) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button size="1" variant="soft">
                    Solution
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Who is more famousbirthdays.com?</Dialog.Title>

                <Flex direction="column" gap="3">
                    <ol className="flex flex-col gap-6 py-4">
                        {people.map((person, idx) => (
                            <li key={idx}>
                                <Flex>
                                    <PersonContainer person={person} idx={idx}></PersonContainer>
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
}
