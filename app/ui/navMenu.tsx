'use client';

import { useTheme } from 'next-themes';
import { Flex, IconButton, Text, Switch } from '@radix-ui/themes';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

type Props = {
    month: {
        name: string;
        days: number[];
    };
};

export default function NavMenu() {
    // const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();
    const setDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Flex justify="center" align="center" gap="4">
            <Text as="label" size="2">
                <Flex gap="2">
                    <Switch size="2" defaultChecked /> Include Influencers
                </Flex>
            </Text>
            <IconButton variant="soft" onClick={setDarkMode}>
                {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
        </Flex>
    );
}
