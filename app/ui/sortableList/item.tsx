import { Person } from '@/app/lib/definitions';
import { DragHandleHorizontalIcon } from '@radix-ui/react-icons';
import { Avatar, Box, Card, Text } from '@radix-ui/themes';
import { CSSProperties, forwardRef, HTMLAttributes } from 'react';

type Props = {
    person: Person;
    isOpacityEnabled?: boolean;
    isDragging?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Item = forwardRef<HTMLDivElement, Props>(
    ({ person: { id, name, img, description }, isOpacityEnabled, isDragging, style, ...props }, ref) => {
        const styles: CSSProperties = {
            opacity: isOpacityEnabled ? '0.4' : '1',
            cursor: isDragging ? 'grabbing' : 'grab',
            lineHeight: '0.5',
            transform: isDragging ? 'scale(1.05)' : 'scale(1)',
            ...style,
        };
        return (
            <div ref={ref} style={styles} {...props}>
                <Card size="2" className="drop-shadow-lg">
                    <div className="flex items-center">
                        <Box className="grow">
                            <div className="flex items-stretch">
                                <Avatar
                                    size="6"
                                    radius="none"
                                    src={img}
                                    fallback={name[0]}
                                    className="drop-shadow-lg"
                                />
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
            </div>
        );
    }
);
Item.displayName = 'Item';

export default Item;
