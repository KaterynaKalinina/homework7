// Task 1

function nestingDepth(obj, counter = 0) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] !== null && typeof obj[key] === 'object') {
            return nestingDepth(obj[key], ++counter);
        };
    };
    return counter;
}


const languages = {
    germanic: {
        westernGroup: {
            a: 'English',
            b: 'German',
            c: 'Dutch',
            deadLanguages: {
                a: 'Gothic',
            },
        },
    },
}
console.log(nestingDepth(languages));


// Task 2

function numberOfDiscrepancies(obj1, obj2) {
    let counter = 0;
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
            counter++;
            if (typeof (obj1[key]) === 'object' && typeof (obj2[key]) === 'object') {
                numberOfDiscrepancies(obj1[key], obj2[key]);
                counter++;
            };
        };

    };
    return counter;
};


const europe = {
    west: 'the UK',
    east: 'Ukraine',
    south: {
        a: 'France',
        b: 'Spain',
    },
    north: 'Norway',
};

const eu = {
    west: 'the UK',
    east: 'Poland',
    south: {
        a: 'Italy',
        b: 'Monaco',
    },
    north: 'Norway',
};

const frenchSpeakingCountries = {
    west: 'Belgium',
    east: 'Switzerland',
    south: 'France',
    north: 'Canada',
};

console.log(numberOfDiscrepancies(europe, eu));
console.log(numberOfDiscrepancies(europe, frenchSpeakingCountries));
