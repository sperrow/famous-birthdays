'use client';

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './sortableItem';
import { Person } from '@/app/lib/definitions';

type Props = {
    items: Person[];
    onDragEnd: (items: Person[]) => void;
};

export default function SortableList({ items, onDragEnd }: Props) {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <ul className="flex flex-col gap-6">
                    {items.map((person, idx) => (
                        <SortableItem key={person.id} person={person} idx={idx} />
                    ))}
                </ul>
            </SortableContext>
        </DndContext>
    );

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
