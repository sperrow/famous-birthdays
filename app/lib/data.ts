import { getData } from './cheerio';

export async function fetchBirthdays(date: string) {
    try {
        const data = await getData(date);
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch birthday data.');
    }
}
