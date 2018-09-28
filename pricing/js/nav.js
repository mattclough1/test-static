(function () {
  var menuButton = document.querySelector('.nav__menu-button');
  var menuLinks = document.querySelector('.nav__menu-links');
  menuButton.onclick = function toggleMenu() {
    if (menuLinks.style.height == "162px") {
      menuLinks.style.height = 0;
      menuButton.style.backgroundImage = "url('images/menu_open.svg')";
    } else {
      menuLinks.style.height = "162px";
      menuButton.style.backgroundImage = "url('images/menu_close.svg')";
    }
  }

  var desktopNav = document.querySelector('.sirocco__nav--desktop');
  window.onscroll = function() { navObserver() };
  function navObserver() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      desktopNav.classList.add("scrolled");
    } else {
      desktopNav.classList.remove("scrolled");
    }
  }
})();
