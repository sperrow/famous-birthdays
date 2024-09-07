'use client';

import { Person } from '@/app/lib/definitions';
import { Box, Badge, Button, Callout, Flex, Card } from '@radix-ui/themes';
import { useState, useEffect, useRef } from 'react';
import SortableList from './sortableList/sortableList';
import { checkSubmission, shuffle } from '../lib/utils';
import SolutionDialog from './solutionDialog';
import { ArrowBottomRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import IncorrectDialog, { IncorrectDialogRef } from './incorrectDialog';

type Props = {
    people: Person[];
};

export default function Game({ people }: Props) {
    const [shuffledPeople, setShuffledPeople] = useState<Person[]>([]);
    const incorrectDialogRef = useRef<IncorrectDialogRef>(null);

    // Ensure that the component renders the same content server-side as it does during the initial client-side render to prevent a hydration mismatch.
    useEffect(() => {
        const shuffled = shuffle(people);
        setShuffledPeople(shuffled);
    }, [people]);

    const handleSubmit = () => {
        console.log(shuffledPeople);
        const submission = checkSubmission(shuffledPeople);
        console.log('submission', submission);
        if (!submission) {
            console.log('incorrect');
            incorrectDialogRef.current?.open();
        }
    };

    return (
        <>
            <Card mb="4" className="drop-shadow-lg">
                <Box p="4" className=" text-center">
                    <Badge size="2" color="red">
                        <ArrowTopRightIcon />
                        Most Famous
                    </Badge>
                    <Box p="4">
                        <SortableList items={shuffledPeople} onDragEnd={setShuffledPeople} />
                    </Box>
                    <Badge size="2" color="yellow">
                        <ArrowBottomRightIcon />
                        Least Famous
                    </Badge>
                </Box>
            </Card>
            <Card className="drop-shadow-lg">
                <Flex p="4" direction="column" justify="center" align="center" gap="4">
                    <Button size="2" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <SolutionDialog people={people} />
                    <IncorrectDialog ref={incorrectDialogRef} />
                </Flex>
            </Card>
        </>
    );
}
