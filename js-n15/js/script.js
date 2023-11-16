"use strict";

const account1 = {
    owner: "Dmitrii Fokeev",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    pin: 1111,
    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-19T14:11:59.604Z",
        "2023-05-21T17:01:17.194Z",
        "2023-05-23T23:36:17.929Z",
        "2023-05-24T10:51:36.790Z",
    ],
};

const account2 = {
    owner: "Anna Filimonova",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    pin: 2222,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2023-05-21T17:01:17.194Z",
        "2023-05-23T23:36:17.929Z",
        "2023-05-24T10:51:36.790Z",
    ],
};

const account3 = {
    owner: "Polina Filimonova",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    pin: 3333,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2023-05-21T17:01:17.194Z",
        "2023-05-23T23:36:17.929Z",
        "2023-05-24T10:51:36.790Z",
    ],
};

const account4 = {
    owner: "Stanislav Ivanchenko",
    movements: [430, 1000, 700, 50, 90],
    pin: 4444,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2023-05-21T17:01:17.194Z",
        "2023-05-23T23:36:17.929Z",
        "2023-05-24T10:51:36.790Z",
    ],
};

const accounts = [account1, account2, account3, account4];

//========================================================================================================================================================
const numberOptions = {
    style: 'currency',
    currency: 'RUB',
}
//========================================================================================================================================================

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
//========================================================================================================================================================
//========================================================================================================================================================
// date function

function formatMovementDate(date) {

    const calcDaysPassed = function (date1, date2) {
        return Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
    };
    const dayPassed = calcDaysPassed(new Date(), date);
    console.log(dayPassed);

    if (dayPassed === 0) return 'Today'
    if (dayPassed === 1) return 'Yesterday'
    if (dayPassed <= 7) return `${dayPassed} days ago`

    const day = `${date.getDate() + 1}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

//========================================================================================================================================================
// movements function


function displayMovemenets(acc, sort = false) {

    containerMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements

    movs.forEach(function (value, index) {

        const type = value > 0 ? 'deposit' : 'withdrawal';

        const typeText = value > 0 ? 'зачисление' : 'снятие';

        const date = new Date(acc.movementsDates[index]);

        const displayDate = formatMovementDate(date);

        const html = `
        
        <div class="movements__row">
            <div class="movements__date">${displayDate}</div>
            <div class="movements__type movements__type--${type}">
                ${index + 1} ${typeText}
            </div>
            <div class="movements__value">${Intl.NumberFormat('ru-RU', numberOptions).format(value)}</div>
        </div>
        
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}

//========================================================================================================================================================
// creating log in INICIALS

function createLogin(accs) {

    accs.forEach(function (acc) {
        acc.login = acc.owner.toLowerCase().split(" ").map(function (value) {
            return value[0]
        }).join("");
    });

}

createLogin(accounts);

console.log(accounts);

//========================================================================================================================================================
// balance sum

function sumOfMovements(acc) {
    acc.finalSum = acc.movements.reduce((prev, next) => prev + next);

    labelBalance.textContent = `${Intl.NumberFormat('ru-RU', numberOptions).format(acc.finalSum)}`;
}

//========================================================================================================================================================
// withdrawal and deposit sum 

function calcDisplaySum(movements) {
    const incomes = movements.filter(mov => mov > 0)
        .reduce((prev, next) => prev + next);
    labelSumIn.textContent = `${Intl.NumberFormat('ru-RU', numberOptions).format(incomes)}`

    const out = movements.filter(out => out < 0)
        .reduce((prev, next) => prev + next, 0);
    labelSumOut.textContent = `${Intl.NumberFormat('ru-RU', numberOptions).format(out)}`

    const sum = incomes + out;
    labelSumInterest.textContent = `${Intl.NumberFormat('ru-RU', numberOptions).format(sum)}`

}

//========================================================================================================================================================
const acc = accounts.find(acc => acc.owner === "Anna Filimonova");

// console.log(acc); 

//========================================================================================================================================================
// login into the account :)


function updateUI(acc) {
    displayMovemenets(acc);
    sumOfMovements(acc);
    calcDisplaySum(acc.movements)
}

//========================================================================================================================================================
// timer

function logOutTimer() {
    let time = 300;

    function tick() {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const seconds = String(time % 60).padStart(2, 0);
        labelTimer.textContent = `${min}:${seconds}`;

        if (time == 0) {
            clearInterval(timer);
            containerApp.style.opacity = 0;
        }
        time--;
    }
    tick();
    const timer = setInterval(tick, 1000);
    return timer
}


//========================================================================================================================================================

let currentAccount;
let timer;

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.login === inputLoginUsername.value)

    console.log(currentAccount);

    if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
        console.log('pin ok');
        inputLoginPin.value = inputLoginUsername.value = '';
        containerApp.style.opacity = 100;

        const local = navigator.language;

        console.log(local);

        const options = {
            year: 'numeric',
            // hour: "numeric",
            // minute: 'numeric',
            day: 'numeric',
            // weekday: 'long',
            month: 'numeric', // 'short'
            // second: 'numeric',
            // timeZoneName: 'long',
        };

        labelDate.textContent = Intl.DateTimeFormat(local, options).format(new Date());
        if (timer) {
            clearInterval(timer);
        }
        timer = logOutTimer();
        updateUI(currentAccount);
    }

});

//========================================================================================================================================================
// withdrawning, sending and depositing money function

btnTransfer.addEventListener("click", (e) => {
    e.preventDefault();
    const receiveAcc = accounts.find(acc => acc.login === inputTransferTo.value);
    const amount = Number(inputTransferAmount.value);

    console.log(amount, receiveAcc);

    if (receiveAcc && amount > 0 && currentAccount.finalSum >= amount && receiveAcc.login !== currentAccount.login) {
        currentAccount.movements.push(-amount);
        receiveAcc.movements.push(amount);

        currentAccount.movementsDates.push(new Date().toISOString());

        clearInterval(timer);
        timer = logOutTimer();

        updateUI(currentAccount);
        inputTransferTo.value = inputTransferAmount.value = '';
    }

});

//========================================================================================================================================================
// closing bank account --- function

btnClose.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.login && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(function (acc) {
            return acc.login === currentAccount.login
        });
        accounts.splice(index, 1);
        containerApp.style.opacity = '0';
    };

});

//========================================================================================================================================================
// some(); every();
// depositing money

btnLoan.addEventListener("click", (e) => {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0) {
        currentAccount.movements.push(amount);
        currentAccount.movementsDates.push(new Date().toISOString());

        clearInterval(timer);
        timer = logOutTimer();

        updateUI(currentAccount);

    }
    inputLoanAmount.value = '';
});

//========================================================================================================================================================
// getting money of all bank clients

const usersBalance = accounts.map(acc => acc.movements).flat()
    .reduce((prev, next) => prev + next);

console.log(usersBalance);

//========================================================================================================================================================
// sorting movemenets function

let sorted = false;

btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMovemenets(currentAccount, !sorted);
    sorted = !sorted;
})

//========================================================================================================================================================
// changing '₽' to 'RUB'

// labelBalance.addEventListener("click", function () {
//     Array.from(document.querySelectorAll('.movements__value'), function (el, index) {
//         return (el.innerText = el.textContent.replace('₽', 'RUB'));
//     });
// });

//========================================================================================================================================================

