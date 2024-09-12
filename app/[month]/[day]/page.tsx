import Image from 'next/image';
import { fetchBirthdays } from '@/app/lib/data';
// import { notFound } from 'next/navigation';

// import { Metadata } from 'next';
import GameContainer from '@/app/ui/gameContainer';

// export const metadata: Metadata = {
//     title: 'Famous Birthdays',
// };

export default async function Page({ params: { day, month } }: { params: { day: string; month: string } }) {
    const date = month.toLowerCase() + day;
    const people = await fetchBirthdays(date);
    if (!people) {
        console.log('no data');
        return null;
    }

    return (
        <main className="">
            <GameContainer people={people} month={month} day={day} />
        </main>
    );
}
