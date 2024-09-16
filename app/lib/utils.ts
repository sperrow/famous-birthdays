import { Person } from './definitions';

export const formatPeople = (people: Person[], includeInfluencers = false) => {
    const formattedPeople = filterPeople(people, includeInfluencers);
    return randomize(formattedPeople);
};

const influencers = ['youtube', 'instagram', 'tiktok', 'family', 'roblox'];

const filterPeople = (people: Person[], includeInfluencers = false) => {
    return people.filter((person) => {
        if (person.img?.includes('default')) {
            return false;
        }
        if (!includeInfluencers) {
            const ignore = influencers.some((item) => person.description.toLowerCase().includes(item));
            if (ignore) {
                return false;
            }
        }
        return true;
    });
};

/**
 * Random selection of people based on tiers
 * @param people
 * @returns array of people
 */
const randomize = (people: Person[]) => {
    const result = [];
    // #1 and #2 should be from 1-10
    const first = Math.floor(Math.random() * 10);
    let second = Math.floor(Math.random() * 10);
    while (first === second) {
        second = Math.floor(Math.random() * 10);
    }
    result.push(people[first]);
    result.push(people[second]);
    // #3 and #4 should be from 11-20
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
 * @returns shuffled copy of array
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
