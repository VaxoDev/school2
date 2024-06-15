$(document).ready(function () {
    $('.input').on('click', function () {
        $('body').toggleClass('change');
        $('body, body *').not('.education-level, .event, nav ul li a').toggleClass('text-white');
        $('.education-level, .event').toggleClass('change-card');
        $('nav ul li a').toggleClass('nav-link-white');
        $('.blog').toggleClass('change');
        $('.gallery').toggleClass('change');
        $('.btn').toggleClass('change');
    });
});