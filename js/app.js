// UI Vars
const windowHeight = window;
const counters = document.querySelectorAll('.counter');
const speed = 1500;
const loader = document.querySelector('.loading');
const content = document.querySelector('.content');

// Load Event Listeners
loadEventListeners();

// Load All Content
initLoad();

// Event Listeners
function loadEventListeners () {
    windowHeight.addEventListener('scroll', scrollFunc);
}

function scrollFunc () {
    const section1Scroll = 500;
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

function initLoad () {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        content.style.display = 'block';
        content.classList.add('content-fade');
    }, 5000);
}

// Jquery Dependencies
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });

    $(".show-toast").click(function(){
        $("#myToast").toast('show');
    });
});

$('.container-reviews').slick({
    autoplay: true,
    autoplaySpeed: 2500
});

$('#card-links a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$(".show-toast").click(function(){
    $("#myToast").toast('show');
});





