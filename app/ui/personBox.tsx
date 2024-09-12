import { Person } from '@/app/lib/definitions';
import { Avatar, Text, Box } from '@radix-ui/themes';
import Link from 'next/link';

type Props = {
    person: Person;
    idx: number;
};

export default function PersonBox({ person: { name, img, description, url }, idx }: Props) {
    const colors = ['bg-purple-500', 'bg-purple-300', 'bg-purple-100', 'bg-white'];
    const bg = colors[idx];
    const classes = `${bg} drop-shadow-lg`;

    return (
        <Box className="grow">
            <div className="flex ">
                <Link href={url} target="_blank">
                    <Avatar size="6" radius="none" src={img} fallback={name[0]} className="drop-shadow-lg" />
                </Link>
                <div className="ml-4 flex  align-center">
                    <Box p="2">
                        <Link href={url} target="_blank">
                            <Text as="div" size="2" weight="bold">
                                {name}
                            </Text>
                        </Link>
                        <Text as="div" size="2" color="gray">
                            {description}
                        </Text>
                    </Box>
                </div>
            </div>
        </Box>
    );
}
