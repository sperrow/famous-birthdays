'use client';

import { Person } from '@/app/lib/definitions';
import { Avatar, Text, Box } from '@radix-ui/themes';

type Props = {
    person: Person;
    idx: number;
};

export default function PersonBox({ person: { name, img, description }, idx }: Props) {
    const colors = ['bg-purple-500', 'bg-purple-300', 'bg-purple-100', 'bg-white'];
    const bg = colors[idx];
    const classes = `${bg} drop-shadow-lg`;

    return (
        <Box className="grow">
            <div className="flex ">
                <Avatar size="6" radius="none" src={img} fallback={name[0]} className="drop-shadow-lg" />
                <div className="ml-4 flex  align-center">
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
    );
}
