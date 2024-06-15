let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let LogoSpan = document.querySelectorAll('.log0');
let header = document.querySelector('.header');

window.addEventListener('DOMContentLoaded', () => {
    header.style.display = 'none';

    setTimeout(() => {
        LogoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });
    });

    setTimeout(() => {
        LogoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50);
        });
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';
        header.style.display = 'flex';
    }, 3000);
});
