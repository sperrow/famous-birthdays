'use client';

import Link from 'next/link';
import { Button, Popover, Flex } from '@radix-ui/themes';

type Props = {
    month: {
        name: string;
        days: number[];
    };
};

export default function Month({ month: { name, days } }: Props) {
    return (
        <Popover.Root>
            <Popover.Trigger>
                <Button variant="soft" style={{ width: '100%' }}>
                    {name}
                </Button>
            </Popover.Trigger>
            <Popover.Content width="360px">
                <Flex gap="2" wrap="wrap">
                    {days.map((day) => (
                        <Link
                            key={day}
                            href={`/${name.toLowerCase()}/${day}`}
                            className="rounded-md border p-2 hover:bg-gray-100"
                        >
                            {day}
                        </Link>
                    ))}
                </Flex>
            </Popover.Content>
        </Popover.Root>
    );
}
