'use client';

import { Container } from '@radix-ui/themes';
import DatePicker from '@/app/ui/datePicker';
import NavMenu from '@/app/ui/navMenu';
import Header from '@/app/ui/header';

export default function Home() {
    return (
        <main>
            <Container size="2" p="4">
                <NavMenu />
                <Header />
                <DatePicker></DatePicker>
            </Container>
        </main>
    );
}
