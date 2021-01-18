var navMain = document.querySelector('.site-nav');
var navToggle = navMain.querySelector('.site-nav__toggle');

navMain.classList.remove('site-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('site-nav--opened')) {
    navMain.classList.remove('site-nav--opened');
    navMain.classList.toggle('site-nav--closed');
  } else {
    navMain.classList.add('site-nav--opened');
    navMain.classList.remove('site-nav--closed');
  }
});
