import axios from 'axios';
import cheerio from 'cheerio';
import { Person } from './definitions';

export async function getData(date: string) {
    const people: Person[] = [];
    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(`https://www.famousbirthdays.com/${date}.html`);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        // Select all the list items
        const peopleItems = $('.tile__item a');
        // Use .each method to loop through the elements we selected
        peopleItems.each((idx, el) => {
            const person: Person = { id: '', name: '', img: '', description: '', rank: '' };
            const name = $(el).find('p').eq(0).text().trim();
            person.name = name;
            person.id = person.name.split(' ').join('-');
            person.img = $(el).find('.tile__picture img')?.attr('src') || '';
            person.description = $(el).find('.tile__description').text();
            person.rank = $(el).find('.tile__star-ranking span').text();
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
