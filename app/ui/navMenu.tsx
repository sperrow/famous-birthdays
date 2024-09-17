'use client';

import { Flex, DropdownMenu, Button, Container } from '@radix-ui/themes';

import { HamburgerMenuIcon, ShuffleIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { months } from '@/app/lib/definitions';
import ThemeChanger from './themeChanger';

interface Props {
    onChange?: (value: boolean) => void;
}

export default function NavMenu({ onChange }: Props) {
    const router = useRouter();
    const [includeInfluencers, setIncludeInfluencers] = useState(false);

    useEffect(() => {
        const cache = localStorage.getItem('includeInfluencers') === 'true';
        setIncludeInfluencers(cache);
    }, []);

    const handleToday = () => {
        const today = new Date();
        const month = months[today.getMonth()];
        const day = today.getDate();
        if (month && day) {
            router.push(`/${month.name.toLowerCase()}/${day}`);
        }
    };

    const handleRandomDay = () => {
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        const randomDay = randomMonth.days[Math.floor(Math.random() * randomMonth.days.length)];
        if (randomDay) {
            router.push(`/${randomMonth?.name.toLowerCase()}/${randomDay}`);
        }
    };

    const onChangeInfluencers = () => {
        setIncludeInfluencers(!includeInfluencers);
        localStorage.setItem('includeInfluencers', String(!includeInfluencers));
        if (onChange) {
            onChange(!includeInfluencers);
        }
    };

    return (
        <Container size="2" pb="4">
            <Flex justify="end" gap="3">
                <Button size="1" variant="soft" onClick={handleToday}>
                    Today
                </Button>
                <Button size="1" variant="soft" onClick={handleRandomDay}>
                    <ShuffleIcon /> Random day
                </Button>
                <ThemeChanger />
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button size="1" variant="soft" aria-label="Options">
                            <HamburgerMenuIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item onSelect={() => router.push('/')}>Home</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => router.push('/about')}>About</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.CheckboxItem checked={includeInfluencers} onCheckedChange={onChangeInfluencers}>
                            Include influencers?
                        </DropdownMenu.CheckboxItem>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Flex>
        </Container>
    );
}
