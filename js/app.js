// UI Vars
// const windowHeight = window.addEventListener('scroll', scrollFunction);
const windowHeight = window;
const counters = document.querySelectorAll('.counter');
const speed = 1500;

// Load Event Listeners
loadEventListeners();

// Event Listeners
function loadEventListeners () {
    windowHeight.addEventListener('scroll', scrollFunc);
}

function scrollFunc () {
    // const scrollable = document.documentElement - windowHeight.innerHeight
    const section1Scroll = 50;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) > section1Scroll) {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout (updateCount, 1)
                } else {
                    count.innerText = target;
                }
            }

            updateCount();
        });
    }
}


// Jquery Dependencies
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });
});


