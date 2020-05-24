// window.addEventListener('scroll', () => {
//     // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const section1Scroll = 200
//     const scrolled = window.scrollY;
//     const counters = document.querySelectorAll('.counter');
//     const speed = 200;

//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = counter.getAttribute('data-target');
//             const count = counter.innerText;

//             const inc = target / speed;

//             if (count < target) {
//                 counter.innerText = count + inc;
//                 setTimeout(updateCount, 2)
//             } else {
//                 count.innerText = target;
//             }
//         }

        
//     });

    

//     if (Math.ceil(scrolled) === section1Scroll) {
        
//     }
// });

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
    const section1Scroll = 150;
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

// scrollFunc();


// const scrollFunction = function () {
//     console.log('this is function')
// }

// scrollFunction();





// Jquery Dependencies
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });
});


