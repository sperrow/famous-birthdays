import Image from 'next/image';
import { fetchBirthdays } from '@/app/lib/data';
// import { notFound } from 'next/navigation';

// import { Metadata } from 'next';
import { Card, Container, Flex, Heading } from '@radix-ui/themes';
import Game from '@/app/ui/game';
import { randomize } from '@/app/lib/utils';

// export const metadata: Metadata = {
//     title: 'Famous Birthdays',
// };

export default async function Page({ params: { day, month } }: { params: { day: string; month: string } }) {
    const date = month.toLowerCase() + day;

    let people = await fetchBirthdays(date);
    if (!people) {
        console.log('no data');
    }
    people = randomize(people);
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    return (
        <main className="">
            <Container size="2" p="4">
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
                            Who is more famousbirthdays.com on&nbsp;{capitalizedMonth}&nbsp;{day}?
                        </Heading>
                        <Image src="/famous-birthdays-star-200.webp" alt="star" width="30" height="30" priority></Image>
                    </Flex>
                </Card>
                {people ? <Game people={people} /> : 'no data'}
            </Container>
        </main>
    );
}
