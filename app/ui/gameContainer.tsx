'use client';

import Image from 'next/image';
import { Person } from '@/app/lib/definitions';
import { Flex, Card, Container, Heading } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import NavMenu from './navMenu';
import Game from './game';
import Link from 'next/link';

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

    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const url = `https://famousbirthdays.com/${month}${day}.html`;

    return (
        <Container size="2" p="4">
            <NavMenu onChange={setIncludeInfluencers} />
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
                        <Heading as="h1" align="center">
                            Who is more famousbirthdays.com on{' '}
                            <Link href={url} target="_blank" className="hover:underline">
                                {capitalizedMonth} {day}
                            </Link>
                            ?
                        </Heading>
                    </Flex>
                    <Image src="/famous-birthdays-star-200.webp" alt="star" width="30" height="30" priority></Image>
                </Flex>
            </Card>
            {mounted && people ? <Game people={people} includeInfluencers={includeInfluencers} /> : null}
        </Container>
    );
}
