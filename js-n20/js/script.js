"use strict"

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// what is static methods?

// Arroy.from ; Number(); String() etc

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static createTodays() {
        return new this('RDR3 - Coming?', new Date());
    }
}

console.log(Article.createTodays())

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// Object.create();

const newPrototype = {
    calcBirth() {
        console.log(2037 - this.age);
    },
    init(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
}

const alexey = Object.create(newPrototype);

alexey.init('Alexey', 35);
console.log(alexey);
alexey.calcBirth();

// using Object.create() - we can make a new setting/parameter in [[Prototype]];
// so new objects like 'alexey' in this example can inherit method(s);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// Creating children classes
// Creating children classes
// Creating children classes

function Employee(firstName, lastName, age, post) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.post = post;
}

Employee.prototype.calcBirth = function () {
    console.log(new Date().getFullYear - this.age);
};

const cashier = new Employee('Ivan', "Avdeed", 26, "Cashier");
console.log(cashier);
cashier.calcBirth();


function Manager(firstName, lastName, age, post, password) {
    Employee.call(this, firstName, lastName, age, post);
    this.password = password;
}

Manager.prototype = Object.create(Employee.prototype);

const manager = new Manager('Irina', 'Kravcova', 33, 'Manager', 'miasdj123');
console.log(manager);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// practicing ----------
// create children class
// create children class
// create children class

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

function ElectroCar(brand, speed, chargeBattery) {
    Car.call(this, brand, speed);
    this.chargeBattery = chargeBattery + ' %';
}

ElectroCar.prototype = Object.create(Car.prototype);

ElectroCar.prototype.batteryCharger = function () {
    const battery = this.chargeBattery.split(" ")
    if (Number(battery[0]) >= 91) {
        return this.chargeBattery
    } else {
        return Number(battery[0]) + 10 + ' %';
    }
};

const porshe = new ElectroCar('Posche - Tuscan', 295, 50);

console.log(porshe);
console.log(porshe.speedUp());
console.log(porshe.speedDown());
console.log(porshe.batteryCharger());
// my version
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// creating children elements using CLASSES
// creating children elements using CLASSES
// creating children elements using CLASSES

// function Employee (firstName, lastName, age, post) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.post = post;
// }

// Employee.prototype.calcBirth = function () {
//     console.log(new Date().getFullYear - this.age);
// };

// function Manager(firstName, lastName, age, post, password) {
//     Employee.call(this, firstName, lastName, age, post);
//     this.password = password;
// }

// Manager.prototype = Object.create(Employee.prototype);


// ==================================>>>>>>>>>>>>>>>>>>>>> syntaxis of classes

class EmployeeTwo {
    constructor(firstName, lastName, age, post) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.post = post;
    }
    calcBirth() {
        console.log(new Date().getFullYear() - this.age);
    }
}

class ManagerTwo extends EmployeeTwo {
    constructor(firstName, lastName, age, post, password) {
        super(firstName, lastName, age, post);
        this.password = password;
    }
    sayHello() {
        console.log('Hi, im new method of ManagerTwo');
    }
}

const newManager = new ManagerTwo('Ervin', 'Koroman', 20, 'Manager', 'mbmy2031');
console.log(newManager);
newManager.calcBirth();
newManager.sayHello();

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// what is API?

// just video

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// variables in classes

class Account {
    movements = []; // variable without let or const
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        console.log(`You create new account ${this.owner}!`);
    }
}

const ivan = new Account('Ivan', 'RUB', 1234);

console.log(ivan);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// encapsulation settings
// public & private settings

class AccountEncapsulation {
    _movements = []; // variable without let or const
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin; // private _NAME
        console.log(`You create new account ${this.owner}!`);
    }
    changePinAPI(password) {
        this._pin = password;
    }
    deposit(value) {
        this._movements.push(value)
    }
    withdraw(value) {
        this.deposit(-value)
    }
    getMovements() {
        return this._movements;
    }
    showCurrentBalance() {
        const balance = this._movements.reduce((prev, next) => {
            return prev + next
        });
        return balance + ' ' + this.currency;
    }
}

const konstantin = new AccountEncapsulation('Konstantin', 'USD', 1111);
console.log(konstantin);
konstantin.changePinAPI(1209)
console.log(konstantin);

//========================================================================================================================================================

konstantin.deposit(150);
konstantin.withdraw(100);
console.log(konstantin);
console.log(konstantin.getMovements());
console.log(konstantin.showCurrentBalance());

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// encapsulation settings
// new standart
console.log('new standart ------------');

class AccountEncapsulationNewStandart {
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin; // private _NAME
        console.log(`You create new account ${this.owner}!`);
    }
    deposit(value) {
        this.#movements.push(value)
        return this
    }
    changePinAPI(newPin) {
        this.#pin = newPin;
    }
    withdraw(value) {
        this.deposit(-value)
        return this
    }
    getMovements() {
        return this.#movements;

    }
    showCurrentBalance() {
        const balance = this.#movements.reduce((prev, next) => {
            return prev + next
        });
        return balance + ' ' + this.currency;
    }
}

const ervin = new AccountEncapsulationNewStandart('Ervin', 'EUR', 12092002);

console.log(ervin);

ervin.changePinAPI(1209)
ervin.deposit(1000);

console.log(ervin);


//========================================================================================================================================================
// chain of methods:

console.log(ervin.deposit(100).deposit(230).withdraw(300).getMovements());

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// practicing - children classes through classes synthaxis

class CarPracticing {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    speedUp() {
        return this.speed + 10 + 'km/h';
    }
    speedDown() {
        return this.speed - 5 + 'km/h';
    }
}

class ElectoCarPracticing extends CarPracticing {
    #charge = '';
    constructor(brand, speed, charge) {
        super(brand, speed);
        this.#charge = charge + ' %';
    }
    batteryCharger() {
        const battery = this.#charge.split(" ")
        if (Number(battery[0]) >= 91) {
            return this.#charge
        } else {
            return Number(battery[0]) + 10 + ' %';    
        }    
    };
}

const tesla = new ElectoCarPracticing('tesla', '270', 20)

console.log(tesla);
console.log(tesla.batteryCharger());