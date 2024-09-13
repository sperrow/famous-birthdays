import { Card, Flex, Heading } from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    month?: string;
    day?: string;
};

export default function Header({ month, day }: Props) {
    let content = <>Who is more famousbirthdays.com?</>;
    if (month && day) {
        const capitalizedMonth = month && day ? month.charAt(0).toUpperCase() + month.slice(1) : '';
        const url = `https://famousbirthdays.com/${month}${day}.html`;
        content = (
            <>
                Who is more famousbirthdays.com on{' '}
                <Link href={url} target="_blank" className="hover:underline">
                    {capitalizedMonth}&nbsp;{day}
                </Link>
                ?
            </>
        );
    }
    return (
        <Card mb="4" className="drop-shadow-lg">
            <Flex align="start" justify="between" p="2">
                <Image
                    src="/famous-birthdays-star-200.webp"
                    alt="star"
                    width="30"
                    height="30"
                    priority
                    className="-scale-x-100"
                ></Image>
                <Flex direction="column" align="center">
                    <Heading as="h1" align="center" size={{ initial: '4', md: '5' }}>
                        {content}
                    </Heading>
                </Flex>
                <Image src="/famous-birthdays-star-200.webp" alt="star" width="30" height="30" priority></Image>
            </Flex>
        </Card>
    );
}
