'use client';

import Image from 'next/image';
import { Card, Container, Flex, Heading } from '@radix-ui/themes';
import DatePicker from '@/app/ui/datePicker';
import NavMenu from '@/app/ui/navMenu';

export default function Home() {
    return (
        <main>
            <Container size="2" p="4">
                <NavMenu />
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
                        <Heading as="h1" align="center">
                            Who is more famousbirthdays.com?
                        </Heading>
                        <Image src="/famous-birthdays-star-200.webp" alt="star" width="30" height="30" priority></Image>
                    </Flex>
                </Card>
                <DatePicker></DatePicker>
            </Container>
        </main>
    );
}
