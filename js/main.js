var mobileIcon      = document.querySelector('.header-menu-trigger');
var mobileMenu      = document.querySelector('.header-nav');
var mobileMenuClose = document.querySelector('.header-nav__close');
var inputArea       = document.querySelectorAll('.input-text');
var body            = document.querySelector('body');
var btButton        = document.querySelector('.back-top');

//Mobile Menu Toggle
mobileIcon.addEventListener('click', function () {
    //mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-is-open');
});

mobileMenuClose.addEventListener('click', function () {
    //mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-is-open');
});

//Check for not-empty Field for Floating Label
inputArea.forEach(el => {
    el.addEventListener('keyup', function () {
        if (el.value.length > 0) {
            el.classList.add('not-empty');
        } else {
            el.classList.remove('not-empty');
        }
    });
});

inputArea.forEach(el => {
    el.addEventListener('keyup', function () {
        if (el.value.length > 0) {
            el.classList.add('not-empty');
        } else {
            el.classList.remove('not-empty');
        }
    });
});

// Show or hide the Back to Top Button
window.addEventListener('scroll', function () {
    offset    = 500;
    scrollpos = window.scrollY;

    if (scrollpos > offset) {
        btButton.classList.add('visible');
    } else {
        btButton.classList.remove('visible');
    }
});

//
//$('.smoothscroll').on('click', function (e) {
//
//    e.preventDefault();
//
//    var target = this.hash,
//        $target = $(target);
//
//    $('html, body').stop().animate({
//        'scrollTop': $target.offset().top
//    }, 800, 'swing', function () {
//        window.location.hash = target;
//    });
//
//});