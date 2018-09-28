(function () {
  var macButtons = document.querySelector('.download-btns.mac');
  var nonMacButtons = document.querySelector('.download-btns.non-mac');
  function detectOS() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    if (ua.match(/Macintosh/i)) {
      return 'mac';
    } else {
      return 'win'
    }
  }
  if (macButtons && nonMacButtons) {
    switch (detectOS()) {
      case 'win':
        macButtons.style.display = `none`;
        nonMacButtons.style.display = `flex`;
        break;
      default:
        macButtons.style.display = `flex`;
        nonMacButtons.style.display = `none`;
    }
  }
})();
