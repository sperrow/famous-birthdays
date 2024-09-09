'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Person } from '@/app/lib/definitions';
import { Avatar, Card, Text, Box } from '@radix-ui/themes';
import { DragHandleHorizontalIcon } from '@radix-ui/react-icons';
import Item from './item';
import { HTMLAttributes } from 'react';

type Props = {
    person: Person;
} & HTMLAttributes<HTMLDivElement>;

export default function SortableItem({ person, ...props }: Props) {
    const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({ id: person.id });

    const styles = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    // const colors = ['bg-pink-500', 'bg-pink-300', 'bg-pink-100', 'bg-white'];
    // const bg = colors[idx];
    // const classes = `drop-shadow-lg`;

    return (
        <Item
            person={person}
            ref={setNodeRef}
            style={styles}
            isOpacityEnabled={isDragging}
            {...props}
            {...attributes}
            {...listeners}
            className="mb-6"
        />
    );
}
