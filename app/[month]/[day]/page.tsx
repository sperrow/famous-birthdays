import { fetchBirthdays } from '@/app/lib/data';
import { months } from '@/app/lib/definitions';
// import { notFound } from 'next/navigation';

import GameContainer from '@/app/ui/gameContainer';

// Return a list of `params` to populate the [month]/[day] dynamic segment
export async function generateStaticParams() {
    return months.flatMap((month) => {
        const result = month.days.map((day) => ({ day: String(day), month: month.name }));
        return result;
    });
}

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
