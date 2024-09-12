'use client';

import { Person } from '@/app/lib/definitions';
import { Badge, Button, Flex, Card } from '@radix-ui/themes';
import { useState, useEffect, useRef } from 'react';
import SortableList from '@/app/ui/sortableList/sortableList';
import { checkSubmission, formatPeople, shuffle } from '@/app/lib/utils';
import SolutionDialog, { SolutionDialogRef } from '@/app/ui/solutionDialog';
import { ArrowBottomRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import IncorrectDialog, { IncorrectDialogRef } from '@/app/ui/incorrectDialog';
import Item from '@/app/ui/sortableList/item';

type Props = {
    people: Person[];
};

export default function Game({ people }: Props) {
    const [solution, setSolution] = useState<Person[]>([]);
    const [sortedPeople, setSortedPeople] = useState<Person[]>([]);
    const solutionDialogRef = useRef<SolutionDialogRef>(null);
    const incorrectDialogRef = useRef<IncorrectDialogRef>(null);

    // Ensure that the component renders the same content server-side as it does during the initial client-side render to prevent a hydration mismatch.
    useEffect(() => {
        const formattedPeople = formatPeople(people);
        setSolution(formattedPeople);
        const shuffled = shuffle(formattedPeople);
        setSortedPeople(shuffled);
    }, [people]);

    const handleSubmit = () => {
        const numOfCorrect = checkSubmission(solution, sortedPeople);
        if (numOfCorrect === solution.length) {
            console.log('correct');
            solutionDialogRef.current?.open();
        } else {
            console.log('incorrect');
            incorrectDialogRef.current?.open(numOfCorrect);
        }
    };

    return (
        <>
            <div className="mt-8 flex justify-center">
                <Badge size="2" color="red">
                    <ArrowTopRightIcon />
                    Most Famous
                </Badge>
            </div>
            <div className="my-2">
                <SortableList
                    items={sortedPeople}
                    onChange={setSortedPeople}
                    renderItem={(item: Person) => (
                        <SortableList.Item id={item.id}>
                            <Card className="drop-shadow-lg w-full">
                                <Flex gap="4" align="center" justify="between">
                                    <Item person={item} />
                                    <SortableList.DragHandle />
                                </Flex>
                            </Card>
                        </SortableList.Item>
                    )}
                />
            </div>
            <div className="mb-4 flex justify-center">
                <Badge size="2" color="yellow">
                    <ArrowBottomRightIcon />
                    Least Famous
                </Badge>
            </div>
            <Flex p="4" justify="center" align="center" gap="4">
                <Button size="2" highContrast onClick={handleSubmit}>
                    Submit
                </Button>
                <SolutionDialog ref={solutionDialogRef} people={solution} />
                <IncorrectDialog ref={incorrectDialogRef} />
            </Flex>
        </>
    );
}
