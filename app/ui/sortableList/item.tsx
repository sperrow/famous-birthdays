import { Person } from '@/app/lib/definitions';
import { Avatar, Box, Text } from '@radix-ui/themes';

interface Props {
    person: Person;
}
export default function Item({ person: { name, img, description } }: Props) {
    return (
        <div className="flex items-center">
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
        </div>
    );
}
