import { Person } from './definitions';

export const filterBirthdays = (people: Person[]) => {
    return people.filter((person) => {
        if (person.img?.includes('default')) {
            return false;
        }
        const websites = ['youtube', 'instagram', 'tiktok', 'family'];
        const ignore = websites.some((item) => person.description.toLowerCase().includes(item));
        if (ignore) {
            return false;
        }
        return true;
    });
};

/**
 * Random selection of people based on tiers
 * @param people
 * @returns array of people
 */
export const randomize = (people: Person[]) => {
    const result = [];
    const first = Math.floor(Math.random() * 10);
    let second = Math.floor(Math.random() * 10);
    while (first === second) {
        second = Math.floor(Math.random() * 10);
    }
    result.push(people[first]);
    result.push(people[second]);
    const third = Math.floor(Math.random() * 10) + 10;
    let fourth = Math.floor(Math.random() * 10) + 10;
    while (third === fourth) {
        fourth = Math.floor(Math.random() * 10) + 10;
    }
    result.push(people[third]);
    result.push(people[fourth]);
    return result.sort((a, b) => parseInt(a.rank, 10) - parseInt(b.rank, 10));
};

/**
 * Shuffle array of people
 * @param people
 * @returns shuffled array
 */
export const shuffle = (people: Person[]) => {
    return people.slice().sort(() => 0.5 - Math.random());
};

/**
 * Check how many people are ranked correctly
 * @param people
 * @param sortedPeople
 * @returns number of correct submissions
 */
export const checkSubmission = (people: Person[], sortedPeople: Person[]): number => {
    let count = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].rank === sortedPeople[i].rank) {
            count++;
        }
    }
    return count;
};
