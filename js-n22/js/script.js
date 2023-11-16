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

function renderCards(data, className = '') {
    const language = Object.entries(data.languages);
    const currency = Object.entries(Object.entries(data.currencies)[0][1]);
    const html = `
            <article class="country ${className}" >
                <img class="country__img" src="${data.flags.svg}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${data.population}</p>
                    <p class="country__row"><span>🗣️</span>${language[0][1]}</p>
                    <p class="country__row"><span>💰</span>${currency[0][1]}</p>
                </div>
            </article>
        `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
}

// rendering error message

function renderError(message) {
    countriesContainer.insertAdjacentText('beforeend', message);
}

// rendering error function

function getJSON(url, errorMsg = 'Something went wrong...') {
    return fetch(url).then(function (response) {
        if (!response.ok) {
            throw new Error(`${errorMsg} (${response.status})`);
        }
        return response.json()
    });
}


// new code
// getting countries data - infromation

function getCountrydata(country) {
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country was not found')
        .then(function (data) {
            renderCards(data[0]);
            const neighbour = data[0].borders;

            if (!neighbour) {
                throw new Error('Neighbour was not found');
            }

            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Neighbour was not found')
                .then(function (data) {
                    const [res] = data;
                    renderCards(res, 'neighbour');
                });
        }).catch(function (error) {
            renderError(`Something went wrong... ${error}`)
        }).finally(function () {
            countriesContainer.style.opacity = 1;
        });
    console.log(request);
}

// listener on our button



//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// practicing

btn.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        fetch(`https:geocode.xyz/${latitude},${longitude}?geoit=json`)
            .then(function (response) {
                return response.json();
            }).then(function (result) {
                const country = result.country;
                console.log(result);
                console.log(country);
                return fetch(`https://restcountries.com/v3.1/name/${country}`)
            }).then(function (response) {
                if (!response.ok) {
                    throw new Error(`Something went wrong... (${response.status})`);
                }
                return response.json();
            }).then(function (data) {
                console.log(data);
                renderCards(data[0]);
            }).catch(function (error) {
                renderError(`Something went wrong... ${error}`)
            }).finally(function () {
                countriesContainer.style.opacity = 1;
            });
    }, function () {
        alert('you didnt give the access to your current position!!UIQY*FAS&(JIfo');
    });
});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// promisefication

//========================================================================================================================================================

const lotteryTicket = new Promise(function (resolve, reject) {
    if (Math.random() >= 0.5) {
        resolve('win');
    } else {
        reject('lose');
    }
});

lotteryTicket.then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
})

console.log(lotteryTicket);

//========================================================================================================================================================

function wait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

wait(2).then(function () {
    console.log('you waited 2 sec');
    return wait(1)
}).then(function () {
    console.log('you waited 1 more sec');
    return wait(1);
});