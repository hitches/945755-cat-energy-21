var navMain = document.querySelector('.site-nav');
var navToggle = navMain.querySelector('.site-nav__toggle');

navMain.classList.remove('site-nav--nojs');

navToggle.classList.add('site-nav--closed');
navToggle.classList.remove('site-nav--opened');
navMain.classList.add('site-nav--closed');
navMain.classList.remove('site-nav--opened');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('site-nav--closed')) {
    navMain.classList.remove('site-nav--closed');
    navMain.classList.add('site-nav--opened');
  } else {
    navMain.classList.add('site-nav--closed');
    navMain.classList.remove('site-nav--opened');
  }
});
