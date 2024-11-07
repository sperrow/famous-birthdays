import Header from '@/app/ui/header';
import NavMenu from '@/app/ui/navMenu';
import { ArrowTopRightIcon, ArrowBottomRightIcon } from '@radix-ui/react-icons';
import { Badge, Box, Container, Skeleton } from '@radix-ui/themes';

const mockItems = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
    {
        id: '4',
    },
];

export default function Loading() {
    return (
        <Container size="2" p="4">
            <NavMenu />
            <Header />
            <div className="mt-8 flex justify-center">
                <Badge size="2" color="red">
                    <ArrowTopRightIcon />
                    Most Famous
                </Badge>
            </div>
            <Box p="4">
                {mockItems.map((item) => (
                    <Skeleton loading={true} key={item.id} className="mb-4">
                        <Box p="8"></Box>
                    </Skeleton>
                ))}
            </Box>
            <div className="mb-4 flex justify-center">
                <Badge size="2" color="yellow">
                    <ArrowBottomRightIcon />
                    Least Famous
                </Badge>
            </div>
        </Container>
    );
}
