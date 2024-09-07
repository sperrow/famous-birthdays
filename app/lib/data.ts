import { getData } from './cheerio';
import { filterBirthdays } from './utils';

export async function fetchBirthdays(date: string) {
    try {
        const data = await getData(date);
        return filterBirthdays(data);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch birthday data.');
    }
}
