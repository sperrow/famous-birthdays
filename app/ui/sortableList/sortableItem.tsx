'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Person } from '@/app/lib/definitions';
import { Avatar, Card, Text, Box } from '@radix-ui/themes';
import { DragHandleHorizontalIcon } from '@radix-ui/react-icons';

type Props = {
    person: Person;
    idx: number;
};

export default function SortableItem({ person: { id, name, img, description }, idx }: Props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const colors = ['bg-pink-500', 'bg-pink-300', 'bg-pink-100', 'bg-white'];
    const bg = colors[idx];
    const classes = `drop-shadow-lg`;

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners} suppressHydrationWarning>
            <Card size="2" className={classes}>
                <div className="flex items-center">
                    <Box className="grow">
                        <div className="flex items-stretch">
                            <Avatar size="6" radius="none" src={img} fallback={name[0]} className="drop-shadow-lg" />
                            <div className="ml-4 flex grow align-center">
                                <Box p="2">
                                    <Text as="div" size="2" weight="bold">
                                        {name}
                                    </Text>
                                    <Text as="div" size="2" color="gray">
                                        {description}
                                    </Text>
                                </Box>
                            </div>
                        </div>
                    </Box>
                    <Box pl="4">
                        <DragHandleHorizontalIcon />
                    </Box>
                </div>
            </Card>
        </li>
    );
}
