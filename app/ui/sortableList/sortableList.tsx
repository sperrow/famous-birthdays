'use client';

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragStartEvent,
    DragOverlay,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './sortableItem';
import { Person } from '@/app/lib/definitions';
import { useEffect, useMemo, useState } from 'react';
import Item from './item';

type Props = {
    items: Person[];
    onDragEnd: (items: Person[]) => void;
};

export default function SortableList({ items, onDragEnd }: Props) {
    // for drag overlay
    const [activeItem, setActiveItem] = useState<Person>();
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map((person) => (
                    <SortableItem key={person.id} person={person} />
                ))}
            </SortableContext>
            <DragOverlay>{activeItem ? <Item person={activeItem} /> : null}</DragOverlay>
        </DndContext>
    );

    function handleDragStart(event: DragStartEvent) {
        const { active } = event;
        const person = items.find((item) => item.id === active.id);
        setActiveItem(person);
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        const activeId = active?.id;
        const overId = over?.id;
        if (activeId && overId && activeId !== overId) {
            const oldIndex = items.findIndex((person) => person.id === activeId);
            const newIndex = items.findIndex((person) => person.id === overId);
            console.log(oldIndex, newIndex);

            const updatedListItems = arrayMove(items, oldIndex, newIndex);
            onDragEnd(updatedListItems);
        }
    }
}
