const findTheOldest = function (people) {
    people_ages = []
    currentYear = new Date().getFullYear()

    for (i = 0; i < people.length; i++) {
        newPerson = { name: '', age: 0 }
        if (people[i].yearOfDeath == undefined) {
            newPerson.age = currentYear - people[i].yearOfBirth
        } else {
            newPerson.age = people[i].yearOfDeath - people[i].yearOfBirth
        }
        newPerson.name = people[i].name
        people_ages.push(newPerson)
    }

    oldestPerson = ''
    highestAge = 0

    for (i = 0; i < people_ages.length; i++) {
        if (people_ages[i].age > highestAge) {
            highestAge = people_ages[i].age
            oldestPerson = people_ages[i].name
        }
    }

    return oldestPerson

};

// Do not edit below this line
module.exports = findTheOldest;
