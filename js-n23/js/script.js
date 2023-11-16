"use strict"

// async code

// how does XMLHTTPREQUEST() works?

// AJAX - technology of requesting a server without reloading the page
// ajax = async js and XML

const btnFacts = document.querySelector('.cats__button');
const textFacts = document.querySelector('.cats__fact');

btnFacts.addEventListener("click", function (e) {
    e.preventDefault();
    const request = new XMLHttpRequest();
    request.open('GET', 'https://meowfacts.herokuapp.com/');
    request.send();
    request.addEventListener("load", function () {
        const data = JSON.parse(request.responseText);
        const [text] = data.data;
        textFacts.innerHTML = text;
    });
});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// flags - apis, practicing ASYNC, COUNTRIES

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//========================================================================================================================================================

// function getCountryData(country) {

//     const requestCountry = new XMLHttpRequest();

//     requestCountry.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//     requestCountry.send();

//     function renderCards(data, className = '') {
//         const language = Object.entries(data.languages);
//         const currency = Object.entries(Object.entries(data.currencies)[0][1]);
//         const html = `
//         <article class="country ${className}" >
//             <img class="country__img" src="${data.flags.svg}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${data.population}</p>
//                 <p class="country__row"><span>🗣️</span>${language[0][1]}</p>
//                 <p class="country__row"><span>💰</span>${currency[0][1]}</p>
//             </div>
//         </article>
//     `;
//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         countriesContainer.style.opacity = 1;
//     }
//     requestCountry.addEventListener("load", function () {
//         const [data] = (JSON.parse(this.responseText));
//         const neighbour = data.borders[0];
//         renderCards(data);

//         const requestTwo = new XMLHttpRequest();

//         requestTwo.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         requestTwo.send();
//         requestTwo.addEventListener("load", function() {
//             const [neighbourData] = JSON.parse(this.responseText);
//             renderCards(neighbourData, 'neighbour');
//         });
//     });

// }

// getCountryData('netherlands');

// callback hell -> solving FETCH & PROMISE

// using fetch

//========================================================================================================================================================
// old code

// function renderCards(data, className = '') {
//     const language = Object.entries(data.languages);
//     const currency = Object.entries(Object.entries(data.currencies)[0][1]);
//     const html = `
//             <article class="country ${className}" >
//                 <img class="country__img" src="${data.flags.svg}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name.common}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${data.population}</p>
//                     <p class="country__row"><span>🗣️</span>${language[0][1]}</p>
//                     <p class="country__row"><span>💰</span>${currency[0][1]}</p>
//                 </div>
//             </article>
//         `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
// }

// function getCountrydata(country) {
//     const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {            
//             if(!response.ok) {
//                 throw new Error(`Country was not found (${response.status})`);
//             }
//             return response.json()
//         })
//         .then(function (data) {
//             renderCards(data[0]);
//             // const neighbour = data[0].borders[0];
//             const neighbour = 'jqafsio'
//             console.log(neighbour);

//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//                 .then(function (response) {
//                     if(!response.ok) {
//                         throw new Error(`Neighbour was not found (${response.status})`);
//                     }
//                     response.json();
//                 }).then(function (data) {
//                     const [res] = data;
//                     renderCards(res, 'neighbour');
//                 });
//         }).catch(function (error) {
//             renderError(`Something went wrong... ${error}`)
//         }).finally(function () {
//             countriesContainer.style.opacity = 1;
//         });
//     console.log(request);
// }


// btn.addEventListener("click", function () {
//     getCountrydata('usa');
// });

//========================================================================================================================================================

// rendering cards with countries information

// function renderCards(data, className = '') {
//     const language = Object.entries(data.languages);
//     const currency = Object.entries(Object.entries(data.currencies)[0][1]);
//     const html = `
//             <article class="country ${className}" >
//                 <img class="country__img" src="${data.flags.svg}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name.common}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${data.population}</p>
//                     <p class="country__row"><span>🗣️</span>${language[0][1]}</p>
//                     <p class="country__row"><span>💰</span>${currency[0][1]}</p>
//                 </div>
//             </article>
//         `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
// }

// rendering error message

// function renderError(message) {
//     countriesContainer.insertAdjacentText('beforeend', message);
// }

// rendering error function

// function getJSON(url, errorMsg = 'Something went wrong...') {
//     return fetch(url).then(function (response) {            
//         if(!response.ok) {
//             throw new Error(`${errorMsg} (${response.status})`);
//         }
//         return response.json()
//     });
// }


// new code
// getting countries data - infromation

// function getCountrydata(country) {
//     const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

//     getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country was not found')
//         .then(function (data) {
//             renderCards(data[0]);
//             const neighbour = data[0].borders;

//             if(!neighbour) {
//                 throw new Error('Neighbour was not found');
//             }

//             return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Neighbour was not found')
//                 .then(function (data) {
//                     const [res] = data;
//                     renderCards(res, 'neighbour');
//                 });
//         }).catch(function (error) {
//             renderError(`Something went wrong... ${error}`)
//         }).finally(function () {
//             countriesContainer.style.opacity = 1;
//         });
//     console.log(request);
// }

// listener on our button

// btn.addEventListener("click", function () {
//     getCountrydata('australia');
// });

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// practicing

// navigator.geolocation.getCurrentPosition(function (position) {
//     const {latitude, longitude} = position.coords;
//     fetch(`https:geocode.xyz/${latitude},${longitude}?geoit=json`)
//     .then(function (response) {
//         return response.json();
//     }).then(function (result) {
//         const country = result.country;
//         console.log(result);
//         console.log(country);
//         return fetch(`https://restcountries.com/v3.1/name/${country}`)
//     }).then(function (response) {
//         if(!response.ok) {
//             throw new Error(`Something went wrong... (${response.status})`);
//         }
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//         renderCards(data[0]);
//     }).catch(function (error) {
//         renderError(`Something went wrong... ${error}`)
//     }).finally(function () {
//         countriesContainer.style.opacity = 1;
//     });
// }, function () {
//     alert('you didnt give the access to your current position!!UIQY*FAS&(JIfo');
// });


// queue loading code

// fetch, promise = the biggest prioritet, same as console.log() etc
// fetch, promise = microtasks queue
// only then setTimeout();

// console.log('Test start');

setTimeout(() => {
    // console.log('0 sec timer');
}, 0);

Promise.resolve('Resolved promise').then((res) => {
    // console.log(res);
});

Promise.resolve('Resolved promise - two').then((res) => {
    for (let i = 0; i < 1000000; i++) {

    }
    // console.log(res);
});

// console.log('Test end');

//========================================================================================================================================================

// calback promisification

// navigator.geolocation.getCurrentPosition(function (position) {
//     const {latitude, longitude} = position.coords;
//     fetch(`https:geocode.xyz/${latitude},${longitude}?geoit=json`)
//     .then(function (response) {
//         return response.json();
//     }).then(function (result) {
//         const country = result.country;
//         console.log(result);
//         console.log(country);
//         return fetch(`https://restcountries.com/v3.1/name/${country}`)
//     }).then(function (response) {
//         if(!response.ok) {
//             throw new Error(`Something went wrong... (${response.status})`);
//         }
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//         renderCards(data[0]);
//     }).catch(function (error) {
//         renderError(`Something went wrong... ${error}`)
//     }).finally(function () {
//         countriesContainer.style.opacity = 1;
//     });
// }, function () {
//     alert('you didnt give the access to your current position!!UIQY*FAS&(JIfo');
// });

const currentPosition = new Promise(function (result, reject) {
    navigator.geolocation.getCurrentPosition(result, reject)
});

currentPosition.then(function (data) {
    // console.log(data);
})

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// how does async, await - works

// async and await works perfectly with PROMISES

// async and await cant work without each other

// async works only with functions!!

// await works only with promises 


async function getCountry(country) {

    const result = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await result.json();

    console.log(result);
    console.log(data);

}

// getCountry('usa');

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// try catch

try {
    let x = 1;
    const y = 2;
    y = 4;
} catch (error) {
    // console.log(error);
}


async function getCountryTwo(country) {

    try {
        const result = await fetch(`https://restcountries.com/v3.1/name/${country}`);

        if (!result.ok) {
            throw new Error('Connection problems');
        }

        const data = await result.json();

        console.log(result);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getCountryTwo('usa');

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// how to return data from our functions async/await

async function getCountryThree(country) {

    try {
        const result = await fetch(`https://restcountries.com/v3.1/name/${country}`);

        if (!result.ok) {
            throw new Error('Connection problems');
        }

        const data = await result.json();

        return `Your country is ${data[0].name.common}`


    } catch (error) {
        console.log(error);
    }
}

// const country = getCountryThree('usa');

getCountryThree('usa').then(response => console.log(response));

(async function () {
    try {
        const country = await getCountryThree('czech');
        console.log(country);
        console.log('--------------------------------------------------------');

    } catch (error) {
        console.log(error);
    }
})();

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// parallel Promise loading
async function getThreeCapital(captialOne, capitalTwo, capitalThree) {
    try {

        // const responseOne = await fetch(`https://restcountries.com/v3.1/name/${captialOne}`);
        // const [dataOne] = await responseOne.json();

        // const responseTwo = await fetch(`https://restcountries.com/v3.1/name/${capitalTwo}`);
        // const [dataTwo] = await responseTwo.json();

        // const responseThree = await fetch(`https://restcountries.com/v3.1/name/${capitalThree}`);
        // const [dataThree] = await responseThree.json();

        const data = await Promise.all([
            fetch(`https://restcountries.com/v3.1/name/${captialOne}`)
            .then(response => response.json()),
            fetch(`https://restcountries.com/v3.1/name/${capitalTwo}`)
            .then(response => response.json()),
            fetch(`https://restcountries.com/v3.1/name/${capitalThree}`)
            .then(response => response.json()),
        ]);

        // console.log(dataOne.capital.join() + ';',  dataTwo.capital.join() + ';', dataThree.capital.join());

        console.log(data.map(item => {
            return item[0].capital.join(' ,');
        }));

    } catch (error) {
        console.log(error);
    }
}

getThreeCapital('usa', 'czech', 'ukraine');

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// addational parallel code methods = race();
// race() helps to find out which fetch was the fastest

(async function () {
    const data = await Promise.race([
        fetch(`https://restcountries.com/v3.1/name/mexico`)
        .then(response => response.json()),
        fetch(`https://restcountries.com/v3.1/name/australia`)
        .then(response => response.json()),
        fetch(`https://restcountries.com/v3.1/name/kazakhstan`)
        .then(response => response.json()),
    ]);
    console.log(data[0]);
})();

function timeout(sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error(`You are waiting too long... More than ${sec} seconds `))
        }, sec * 1000);
    })
}

Promise.race([
    fetch(`https://restcountries.com/v3.1/name/japan`)
    .then(response => response.json()),
    timeout(0.1)
]).then(result => console.log(result[0])).catch(error => console.log(error));

// Promise.allSettled([]) 

// Promise.any([]) - returns first RESOLVED promise

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

