'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//========================================================================================================================================================

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

//========================================================================================================================================================

btnScroll.addEventListener("click", function () {
    // window.scrollTo({
    //   left: section1.getBoundingClientRect().left + window.pageXOffset,
    //   top: section1.getBoundingClientRect().top + window.pageYOffset,
    //   behavior: 'smooth'
    // });

    section1.scrollIntoView({
        behavior: 'smooth'
    });

});

//========================================================================================================================================================

const h1 = document.querySelector("h1");

function alertH1() {
    alert('hello');
    h1.removeEventListener("mouseenter", alertH1);
}

// h1.addEventListener("mouseenter", alertH1);

//========================================================================================================================================================

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
    return `rgb(${randomizer(0, 255)}, ${randomizer(0, 255)}, ${randomizer(0, 255)})`
}

//========================================================================================================================================================

const nav = document.querySelector(".nav");

const navLinks = document.querySelector(".nav__links");

const link = document.querySelector(".nav__link");

// nav.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// navLinks.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// link.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   e.stopPropagation();
// });

//========================================================================================================================================================
//========================================================================================================================================================

const navLinksAll = document.querySelectorAll('.nav__link');

// navLinksAll.forEach( function(elem) {
//   elem.addEventListener("click", function(e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

//========================================================================================================================================================

navLinks.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }

})

//========================================================================================================================================================
// making tabs

const tabs = document.querySelectorAll(".operations__tab");

const tabContainer = document.querySelector(".operations__tab-container");

const tabsContent = document.querySelectorAll(".operations__content");


tabContainer.addEventListener("click", function (e) {
    e.preventDefault();

    const curTarget = e.target.closest('.operations__tab');

    console.log(curTarget);

    if (!curTarget) return

    tabs.forEach(function (e) {
        e.classList.remove('operations__tab--active');
    });
    curTarget.classList.add('operations__tab--active');

    tabsContent.forEach(function (e) {
        e.classList.remove('operations__content--active')
    });

    document.querySelector(`.operations__content--${curTarget.dataset.tab}`).classList.add('operations__content--active');


});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

function hover(e, opacity) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll(".nav__link");
        const logo = link.closest('.nav').querySelector('.nav__logo');

        siblings.forEach((el) => {
            if (el !== link) {
                el.style.opacity = this;
            }
        });
        logo.style.opacity = this;
    }
}

nav.addEventListener("mouseover", hover.bind(0.5));

nav.addEventListener("mouseout", hover.bind(1));

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

const navContainer = document.querySelector('.nav');

const coord = section1.getBoundingClientRect();


// intersection observer API

function callBack(entries) {
    if (!entries[0].isIntersecting) {
        navContainer.classList.add("sticky");
    } else {
        navContainer.classList.remove('sticky');
    }
};

const options = {
    root: null,
    threshhold: 0,
};

const observer = new IntersectionObserver(callBack, options);

observer.observe(document.querySelector('.header'));

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// intersectionObserver on SECTIONS

// const allSections = document.querySelectorAll(".section");

// function revealSection(entries, observe) {
//     if (entries[0].isIntersecting) {
//         entries[0].target.classList.remove('section--hidden')
//         observe.unobserve(entries[0].target);
//     }
// }

// const sectionObserver = new IntersectionObserver(revealSection, { threshhold: 0.10, });

// allSections.forEach((section) => {
//     sectionObserver.observe(section);
//     section.classList.add('section--hidden');
// });

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// interSectionObserver on IMAGES

const allImages = document.querySelectorAll('img[data-src]');

function imgLoading(entries, observer) {

    if (!entries[0].isIntersecting) return;

    entries[0].target.src = entries[0].target.dataset.src;

    entries[0].target.addEventListener("load", function () {
        entries[0].target.classList.remove('lazy-img');
    });

    observer.unobserve(entries[0].target);

}

const imagesObserver = new IntersectionObserver(imgLoading, { threshold: 0.15 });

allImages.forEach(image => { imagesObserver.observe(image) });

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// creating SLIDER

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
const maxSlides = slides.length;

function createDots() {
    slides.forEach(function (slide, index) {
        dotsContainer.insertAdjacentHTML('beforeend', 
        `<button class='dots__dot' data-slide='${index}'></button>`);
    });
}

createDots();

// slider.style.scale = 0.5;
// slider.style.overflow = 'visible';

function goToSlide(slide) {
    slides.forEach(function (itemOfSlide, index) {
        itemOfSlide.style.transform = `translateX(${100 * (index - slide)}%)`
    });
}

function activeDots(slide) {
    document.querySelectorAll('.dots__dot').forEach(function(dot) {
        dot.classList.remove('dots__dot--active');
    });
    document.querySelector(`.dots__dot[data-slide='${slide}']`).classList.add("dots__dot--active")
}

goToSlide(0);
activeDots(0);

function nextSlide() {
    if (currentSlide === maxSlides - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }

    goToSlide(currentSlide);
    activeDots(currentSlide);
}

function previousSlide() {
    if (currentSlide === 0) {
        currentSlide = maxSlides - 1
    } else {
        currentSlide--
    }

    goToSlide(currentSlide);
    activeDots(currentSlide);
}

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        previousSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
})

dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains('dots__dot')) {
        const slide = e.target.dataset.slide;
        goToSlide(slide);
        activeDots(slide);
    }
})

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

