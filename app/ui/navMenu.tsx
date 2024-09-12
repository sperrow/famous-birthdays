'use client';

import { Flex, DropdownMenu, Button, Container } from '@radix-ui/themes';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { months } from '@/app/lib/definitions';
import ThemeChanger from './themeChanger';

export default function NavMenu() {
    const router = useRouter();

    const handleRandomDay = () => {
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        const randomDay = randomMonth.days[Math.floor(Math.random() * randomMonth.days.length)];
        if (randomDay) {
            router.push(`/${randomMonth?.name.toLowerCase()}/${randomDay}`);
        }
    };

    return (
        <Container size="2" pb="4">
            <Flex justify="end" gap="3">
                <ThemeChanger />
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button size="1" variant="soft" aria-label="Options">
                            <HamburgerMenuIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item onSelect={() => router.push('/')}>Home</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={handleRandomDay} color="crimson">
                            Random day
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        {/* <DropdownMenu.CheckboxItem checked={includeInfluencers} onCheckedChange={onChangeInfluencers}>
                            Include influencers?
                        </DropdownMenu.CheckboxItem> */}
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Flex>
        </Container>
    );
}
