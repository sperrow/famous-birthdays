'use client';

import { Button, Container, Flex } from '@radix-ui/themes';
import DatePicker from '@/app/ui/datePicker';
import NavMenu from '@/app/ui/navMenu';
import Header from '@/app/ui/header';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <Container size="2" p="4">
                <NavMenu />
                <Header />
                <DatePicker></DatePicker>
                <Flex direction="column" align="center" mt="6">
                    <Link href="/about" className="pb-4">
                        <Button size="1" variant="soft">
                            About
                        </Button>
                    </Link>
                </Flex>
            </Container>
        </main>
    );
}
