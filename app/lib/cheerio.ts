import cheerio from 'cheerio';
import { Person } from './definitions';

export async function getData(date: string) {
    const people: Person[] = [];
    try {
        // Fetch HTML of the page we want to scrape
        const data = await fetch(`https://www.famousbirthdays.com/${date}.html`, { next: { revalidate: 86400 } });
        const page = await data.text();
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(page);
        // Select all the list items
        const peopleItems = $('.tile__item a');
        // Use .each method to loop through the elements we selected
        peopleItems.each((idx, el) => {
            const person: Person = { id: '', name: '', img: '', description: '', rank: '', url: '' };
            const name = $(el).find('p').eq(0).text().trim();
            person.name = name;
            person.id = person.name.split(' ').join('-');
            person.img = $(el).find('.tile__picture img')?.attr('src') || '';
            person.description = $(el).find('.tile__description').text();
            person.rank = $(el).find('.tile__star-ranking span').text();
            person.url = $(el).attr('href') || '';
            // Populate array with person data
            people.push(person);
        });
        // Logs people array to the console
        // console.dir(people);
    } catch (err) {
        console.error(err);
    }
    return people;
}
