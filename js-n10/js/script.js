'use strict'

// operator SPREAD

const arrayOne = [1, 2, 3, 4, 5, 6, 7];

console.log(...arrayOne);

//========================================================================================================================================================

const string = 'hello';

console.log(...string);

//========================================================================================================================================================

const objectOne = {
    fruits: ['apple', 'pear', 'mango', 'lemon'],
    drinks: ['tea', 'juice', 'cocktail'],
};

console.log(...objectOne.fruits);

//========================================================================================================================================================

const newFruits = [...objectOne.fruits];
const newDrinks = [...objectOne.drinks];

console.log(newFruits);
console.log(newDrinks);

//========================================================================================================================================================

function cocktailMixer(drink, ing1, ing2) {
    console.log(`You've chosen ${drink} of ${ing1} and ${ing2}`)
}

cocktailMixer('tea', ...objectOne.fruits);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// rest operator - same as spread but just opposit
// rest operator
// rest operator

// difference 

// rest <- left side of the '=' operator
// spread -> right side of the '=' operator

//========================================================================================================================================================
console.log('---------------------------')
console.log('------------rest-----------')
console.log('---------------------------')

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

console.log(a, b);
console.log(others);

// rest should be the last element
// rest works with objects and arrays

const { fruits, ...drinks } = objectOne;

console.log(fruits);
console.log(drinks);

//========================================================================================================================================================

function exampleRest(...numbers) {
    let sum = 0;
    for (let item of numbers) {
        sum += item;
    }
    console.log(sum);
};

exampleRest(1, 2, 3, 4, 5, 6, 7, 8, 9);




//========================================================================================================================================================
//practicing
// const arr = [1, 2, 3, 45, 6, 7, 8];

// const newArr = arr.reduce((prev, next) => {
//     return prev + next;
// });

// console.log(newArr);
//========================================================================================================================================================

console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
console.log('  ');
// practicing - destructurization, spread, rest
// practicing - destructurization, spread, rest
// practicing - destructurization, spread, rest

/*
ЗАДАЧИ:

1.Создайте отдельные массивы игроков каждой команды. (Переменные pleayersTeamOne и pleayersTeamTwo)

2. Первый игрок в каждом массиве - это вратарь, остальные игроки это просто члены команды. Для первых игроков каждой команды, создайте переменную goalKeeper, а для всех остальных fieldPlayers.

3.Создайте один массив allPlayers который будет содержать всех игроков обеих команд.

4.Добавьте в массив allPlayers еще 3-х игроков. (Имена игроков придумайте сами)

5. В объекте game есть объект odds, внутри которого три свойства: 
team1: 1.33, 
x: 3.25,
team2: 6.5. 
С помощью деструктуризации объекта, создайте 3 переменные из этого объекта. При создании переменных, 
let team1 = 1.33,
let x = 3.25,
let team2 = 6.5
поменяйте имя свойства x на draw.




*/
const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


// 1.

// const { players: [[...pleayersTeamOne], [...pleayersTeamTwo]] } = game;

const [pleayersTeamOne, pleayersTeamTwo] = game.players;

console.log(pleayersTeamOne);
console.log(pleayersTeamTwo);

// 2.

let goalKeeper = [
    pleayersTeamOne[0], pleayersTeamTwo[0]
];

console.log(goalKeeper);

const [, ...fieldPlayers] = pleayersTeamOne;
const [, ...fieldPlayersTwo] = pleayersTeamTwo;

console.log(fieldPlayers);
console.log(fieldPlayersTwo);

const allFieldPlayers = [...fieldPlayers, ...fieldPlayersTwo];

console.log(allFieldPlayers);

// 3.

let allPlayers = [
    ...pleayersTeamOne, ...pleayersTeamTwo
]

console.log(allPlayers);

// 4. 

allPlayers.push('Neymar', 'Ronaldo', 'Zlatan');

console.log(allPlayers);

// 5.

const { odds: { team1, x: draw, team2 } } = game;

console.log(team1, team2, draw);

//========================================================================================================================================================


