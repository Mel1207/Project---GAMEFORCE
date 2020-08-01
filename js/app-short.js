// UI Vars
const loaderShort = document.querySelector('.short-load');
const content = document.querySelector('.content');
const navTop = document.querySelector('#nav-top');
const navBot = document.querySelector('#nav-bot');

// Load All Content
shortLoad();

function shortLoad () {
    setTimeout(() => {
        loaderShort.style.opacity = 0;
        loaderShort.style.display = 'none';
        content.style.display = 'block';
        navTop.style.opacity = 1;
        navTop.style.display = 'block';
        navBot.style.opacity = 1;
        navBot.style.display = 'block';
        content.classList.add('content-fade');
    }, 500);
}

// Jquery Dependencies
$(document).ready(function () {
    
});

$(".show-toast").click(function(){
    $("#myToast").toast('show');
});

// $('.container-reviews').slick({
//     autoplay: true,
//     autoplaySpeed: 2500
// });

// $('#bologna-list a').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// })

$('#card-links a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})





