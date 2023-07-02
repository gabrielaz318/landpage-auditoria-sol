// Controla a exibição de um background do navbar

var scrolling = false;

window.addEventListener('scroll', function() {
  if (!scrolling) {
    scrolling = true;
    
    setTimeout(function() {
      var navbarDesktop = document.getElementById('container-nav-desktop');
      var navbarMobile= document.getElementById('container-nav-mobile');

      var scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        navbarDesktop.classList.add('scrolled');
        navbarMobile.classList.add('scrolled');
      } else {
        navbarDesktop.classList.remove('scrolled');
        navbarMobile.classList.remove('scrolled');
      }

      scrolling = false;
    }, 250);
  }
});