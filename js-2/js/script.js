'use strict'

function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else no();
}

function showOk() {
    alert("You have agreed");
}

function showCancel() {
    alert("You have canceled");
}

// ask('Are you 18+?', showOk, showCancel);

//========================================================================================================================================================

// arrow function

let sum = (a, b) => a + b;

console.log(sum(5, 10));

//========================================================================================================================================================

let teamResult = (a, b, c) => (a + b + c) / 3;

let crazyCats = 'crazyCats';
let funnyDucks = 'funnyDucks';

let catsResult = teamResult(40, 92, 144);

let ducksResult = teamResult(44, 23, 71);

console.log(`Cats result: ${catsResult}`);
console.log(`Ducks result: ${ducksResult}`);

function teamDiff(teamA, teamB, crazyCats, funnyDucks) {
    if (teamA / teamB >= 2) {
        console.log(`team ${crazyCats} won!`)
    } else if (teamB / teamA >= 2) {
        console.log(`team ${funnyDucks} won`)
    } else {
        console.log('Match result: DRAWN');
    }
}

teamDiff(catsResult, ducksResult, crazyCats, funnyDucks);

//========================================================================================================================================================

// objects

const user = {
    name: 'Ervin',
    age: 20,
    sex: 'male'
}

delete user.sex;

console.log(user);

//========================================================================================================================================================

user['proffesion'] = 'IT';

console.log(user);

//========================================================================================================================================================

const propertyName = 'new property';

user.propertyName = 'property value';

console.log(user);

//========================================================================================================================================================

user[propertyName] = 'property value'; // !!!!!!!!!!!!!!!!!!!!!!!!

console.log(user);

console.log(user['new property']);

// XXXXX console.log(user.new property); <------ DOESNT WORK

//========================================================================================================================================================
console.log('-------------------------');
const firstName = 'John'
const lastName = 'Travolta';

const userTwo = {
    firstName,
    lastName,
    birthyear: 1992,
    calcAge() {
        return 2023 - this.birthyear // подставляет имя объекта
    }
}

console.log(userTwo.calcAge());

//========================================================================================================================================================

function calcAge() {
    return 2023 - this.birthyear
}

// const userTwo = {
//     firstName,
//     lastName,
//     birthyear: 1992,
//     calcAge !!!!!!!!!!!!!!
// }
//========================================================================================================================================================
// const userTwo = {
//     firstName,
//     lastName,
//     birthyear: 1992,
//     calcAge() {
//          return 2023 - user.birthyear !!!!!!!!!
//     }
// }

// console.log(userTwo.calcAge());

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

console.log('homework ----');

function calcBMI() {
    return this.weight / this.height ** 2;
};

const userErvin = {
    name: 'Ervin',
    lastName: 'Koroman',
    weight: 76,
    height: 1.76,
    calcBMI
}

const userVictor = {
    name: 'Victor',
    lastName: 'Kramskoy',
    weight: 94,
    height: 1.89,
    calcBMI
}

let ervinResult = userErvin.calcBMI();
let victorResult = userVictor.calcBMI();

if (ervinResult > victorResult) {
    console.log(`Ervin's body index is bigger (result: ${ervinResult}) than Victor's body index (result: ${victorResult})`)
} else if (ervinResult < victorResult) {
    console.log(`Ervin's body index is less (result: ${ervinResult}) than Victor's body index (result: ${victorResult})`)
} else {
    console.log('Oops, seems like there is a problem');
}

//========================================================================================================================================================




