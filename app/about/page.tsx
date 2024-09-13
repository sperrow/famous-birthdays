import Image from 'next/image';
import { Card, Container, Flex, Heading, Blockquote, Text } from '@radix-ui/themes';
import NavMenu from '@/app/ui/navMenu';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
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
                <Flex direction="column" gap="4" justify="center" my="8">
                    <Text>
                        As a fan of the{' '}
                        <Link href="https://www.whoweekly.us" target="_blank" className="font-semibold hover:underline">
                            Who? Weekly
                        </Link>{' '}
                        podcast, I've been enjoying the game "Who is more famousbirthdays.com?" every month and thought
                        it'd be fun to make an online version.
                    </Text>
                    <Text>
                        But describing the game to someone who isn't familiar with the website has been
                        challenging—hopefully{' '}
                        <Link
                            href="https://en.wikipedia.org/wiki/Famous_birthdays"
                            target="_blank"
                            className="font-semibold hover:underline"
                        >
                            wikipedia
                        </Link>{' '}
                        can help explain:
                    </Text>
                    <Blockquote m="4">
                        Famous Birthdays is an American website [...] which is dedicated to cataloging the birthdays of
                        famous people and compiling other facts about them.
                        <br />
                        <br />
                        Each page has a &quot;boost&quot; button—each visitor who clicks this button will
                        &quot;boost&quot; the biography higher up into the &quot;trending&quot; or &quot;most
                        popular&quot; rankings. Online celebrities may canvass their followers into swaying them higher
                        into the rankings by encouraging them to press the &quot;boost&quot; button.
                    </Blockquote>
                    <Text>
                        Essentially your goal is to predict who{' '}
                        <Link
                            href="https://famousbirthdays.com"
                            target="_blank"
                            className="font-semibold hover:underline"
                        >
                            famousbirthdays.com
                        </Link>{' '}
                        thinks is the most famous rather than who is actually the most famous. TikTok/Youtube/Instagram
                        influencers tend to do the best in the rankings (I added a setting to exclude them to make the
                        game a little easier/less unhinged).
                    </Text>
                    <Text>
                        Code available{' '}
                        <Link
                            href="https://github.com/sperrow/famous-birthdays"
                            target="_blank"
                            className="font-semibold hover:underline"
                        >
                            here
                        </Link>
                        , thanks to Who? Weekly for the entertainment and for creating this deeply stupid game.
                    </Text>
                </Flex>
            </Container>
        </main>
    );
}
