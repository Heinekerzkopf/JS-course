"use strict"

// CONSTRUCTOR FUNCTIONS
// CONSTRUCTOR FUNCTIONS
// CONSTRUCTOR FUNCTIONS


function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

User.prototype.calcAge = function () {
    return 2023 - this.age;
};

const ivan = new User('Ivan', 'Kolobok', 2002);

console.log(ivan);
console.log(ivan.calcAge());

//========================================================================================================================================================
// prototype & __proto__


Array.prototype.uniq = function () {
    return [...new Set(this)];
}

const arrayOne = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

console.log(arrayOne.uniq());

//========================================================================================================================================================
//========================================================================================================================================================
// practicing - create constructor functions

function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;
}

Car.prototype.speedUp = function () {
    return this.speed + 10 + 'km/h';
}

Car.prototype.speedDown = function () {
    return this.speed - 5 + 'km/h';
}

const lada = new Car('Lada', 170);
const skoda = new Car('Skoda', 105);

console.log(lada);
console.log(lada.speedUp());
console.log(lada.speedDown());
console.log(skoda);
console.log(skoda.speedUp());
console.log(skoda.speedDown());

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
// difference between CLASSes and CONSTRUCTOR FUNCTIONS

class User1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    calcAge() {
        return 2023 - this.age;
    };
}

const anna = new User1('Anna', 'Loxovna', 1973);

console.log(anna);
console.log(anna.calcAge());

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
// what is getters 

// getter is a function, that looks like setting of an objects 

const user = {
    firstName: 'Dima',
    lastName: 'Koroman',
    age: 30,
    get gerthYear() {
        return new Date().getFullYear() - this.age
    }
}

console.log(user);

class User3 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    calcAge() {
        return 2023 - this.age;
    };
    get birthYear() {
        return new Date().getFullYear() - this.age
    }
}

const annaTwo = new User3('AnnaTwo', 'Bitcharovna', 32);

console.log(annaTwo);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
// what is setters

// setters let us to change the settings/parameters and use things like function can

class User4 {
    constructor(fullName) {
        this.firstName;
        this.lastName;
        this.fullName = fullName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(val) {
        if (val.length < 3) {
            alert("Too short, name and lastname should contain at least 3 letters");
        }
        const name = val.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

const newAnna = new User4('Anna Zelenska');

console.log(newAnna);

//========================================================================================================================================================

class User5 {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age;
        this.birthYear = birthYear;
    }
    get birthYear() {
        return new Date().getFullYear() - this.age
    }
    set birthYear(value) {
        const year = '' + value;
        if (year.length < 4) {
            alert('incorrect infomation, birthyear should contain 4 numbers')
            return
        }
        this.age = new Date().getFullYear() - year;
    }
}

const constantin = new User5('Konstantin', 'Ujebanovic', 1988);

console.log(constantin);

//========================================================================================================================================================

class User6 {
    constructor(fullName, birthYear) {
        this.firstName;
        this.lastName;
        this.age;
        this.birthYear = birthYear;
        this.fullName = fullName;
    }
    get birthYear() {
        return new Date().getFullYear() - this.age
    }
    set birthYear(value) {
        const year = '' + value;
        if (year.length < 4) {
            alert('incorrect infomation, birthyear should contain 4 numbers')
            return
        }
        this.age = new Date().getFullYear() - year;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(val) {
        if (val.length < 3) {
            alert("Too short, name and lastname should contain at least 3 letters")
        }
        const name = val.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

const andrij = new User6('Andrij Daunovic', 1955);

console.log(andrij);

//========================================================================================================================================================
//========================================================================================================================================================
// practicing - getters & setters

// function Car (brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
// }

// Car.prototype.speedUp = function () {
//     return this.speed + 10 + 'km/h';
// }

// Car.prototype.speedDown = function () {
//     return this.speed - 5 + 'km/h';
// }

// const lada = new Car('Lada', 170);
// const skoda = new Car('Skoda', 105);

// console.log(lada);
// console.log(lada.speedUp());
// console.log(lada.speedDown());
// console.log(skoda);
// console.log(skoda.speedUp());
// console.log(skoda.speedDown());

class newCar {
    constructor(brand, speedKmh) {
        this.brand = brand;
        this.speedKmh = speedKmh;
        this.speedMph;
    }
    get speedKmh() {
        return this.speedMph * 1.61;
    }
    set speedKmh(speed) {
        this.speedMph = speed / 1.61;
    }
    speedUp() {
        return this.speedKmh + 10 + 'km/h';
    }
    speedDown() {
        return this.speedKmh - 5 + 'km/h';
    }
}

const randomCar = new newCar('Honda', 110);

console.log(randomCar);
console.log(randomCar.speedDown());
console.log(randomCar.speedUp());