'use client';

import { useTheme } from 'next-themes';
import { Flex, IconButton, Text, Switch, DropdownMenu, Button, Container } from '@radix-ui/themes';

import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { months } from '@/app/lib/definitions';

type Props = {
    month: {
        name: string;
        days: number[];
    };
};

export default function NavMenu() {
    const router = useRouter();
    const [influencers, setInfluencers] = useState(false);
    // const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();
    const setDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleRandomDay = () => {
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        const randomDay = randomMonth.days[Math.floor(Math.random() * randomMonth.days.length)];
        if (randomDay) {
            router.push(`/${randomMonth?.name.toLowerCase()}/${randomDay}`);
        }
    };

    return (
        // <Flex justify="center" align="center" gap="4">
        //     <Text as="label" size="2">
        //         <Flex gap="2">
        //             <Switch size="2" defaultChecked /> Include Influencers
        //         </Flex>
        //     </Text>
        //     <IconButton variant="soft" onClick={setDarkMode}>
        //         {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        //     </IconButton>
        // </Flex>
        <Container size="2" p="4">
            <Flex justify="end">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button size="1" variant="soft" aria-label="Options">
                            {/* <DropdownMenu.TriggerIcon /> */}
                            <HamburgerMenuIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item onSelect={() => router.push('/')}>Home</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={handleRandomDay}>Random day</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.CheckboxItem checked={influencers} onCheckedChange={setInfluencers}>
                            Include influencers?
                        </DropdownMenu.CheckboxItem>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Flex>
        </Container>
    );
}
