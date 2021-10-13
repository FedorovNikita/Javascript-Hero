// const header = document.querySelector('.header__list');
// const headerHeight = header.offsetHeight;
// const windowHeight = document.documentElement.clientHeight;

// console.log(headerHeight, windowHeight);

// function onScroll(e) {
    
//     let pos = window.pageYOffset;

//     if (pos < headerHeight + 100) {
//         header.style.position = 'absolute';
//         header.style.top = '0';
//         header.style.backgroundColor = 'transparent';
//         header.style.transition = 'none';
//     }
    
//     if (pos > headerHeight + 100) {
//         // Set position fixed header
//         header.style.position = 'fixed';
//         header.style.top = '-100px';
//         header.style.backgroundColor = 'red';
//     }

//     if (pos > windowHeight) {
//         header.style.top = '0';
//         header.style.transition = 'top ease-out .3s';
//     }
// }

// window.addEventListener('scroll', onScroll);
// window.addEventListener('load', onScroll);

const header = $('.header__list');
const windowHeight = $(window).height();
const headerHeight = header.outerHeight();

function onScroll(e) {
    let pos = $(window).scrollTop();

    if (pos < headerHeight + 100) {
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none',
        });
    }
    
    if (pos > headerHeight + 100) {
        // Set position fixed header
        header.css({
            'position': 'fixed',
            'top': '-100px',
            'background-color': 'red',
        });
    }

    if (pos > windowHeight) {
        header.css({
            'top': '0',
            'transition': 'top ease-out .3s',
        });
    }
}

$(window).on('scroll', onScroll);
$(window).on('load', onScroll);


// Scroll to Element
// document.querySelectorAll('.header__list a[href^="#"').forEach(link => {

//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         let href = this.getAttribute('href').substring(1);

//         const scrollTarget = document.getElementById(href);

//         const topOffset = document.querySelector('.header__list').offsetHeight;
//         // const topOffset = 0; // если не нужен отступ сверху 
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });
//     });
// });

const scrollBtn = $('.header__list a[href^="#"');

function onClick(e) {
    e.preventDefault();

    const target = $(this).attr('href');
    const dist = $(target).offset().top;
    $('html, body').animate({ scrollTop: dist }, 1000, 'swing');
}

scrollBtn.on('click', onClick);
