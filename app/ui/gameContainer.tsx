'use client';

import { Person } from '@/app/lib/definitions';
import { Container } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import NavMenu from './navMenu';
import Game from './game';
import Header from '@/app/ui/header';

type Props = {
    people: Person[];
    month: string;
    day: string;
};

export default function GameContainer({ people, month, day }: Props) {
    const [mounted, setMounted] = useState(false);
    const [includeInfluencers, setIncludeInfluencers] = useState(false);

    useEffect(() => {
        setMounted(true);
        const cache = localStorage.getItem('includeInfluencers') === 'true';
        setIncludeInfluencers(cache);
    }, []);

    return (
        <Container size="2" p="4">
            <NavMenu onChange={setIncludeInfluencers} />
            <Header month={month} day={day} />
            {mounted && people ? <Game people={people} includeInfluencers={includeInfluencers} /> : null}
        </Container>
    );
}
