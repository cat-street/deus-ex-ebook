const article = document.getElementsByClassName('article');
const navButton = document.getElementsByClassName('navigation__link');

function switchPage(page) {
  for (let i = 0; i < navButton.length; i++) {
    if (i === page) {
      navButton[i].textContent = '●';
      navButton[i].style.pointerEvents = 'none';
      article[i].hidden = false;
      article[i].style.opacity = 0;
      window.setTimeout(function () {
        article[i].style.opacity = 1;
      }, 200);
    } else {
      navButton[i].textContent = '○';
      navButton[i].style.pointerEvents = 'auto';
      article[i].hidden = true;
    }
  }
}

for (let i = 0; i < navButton.length; i++) {
  navButton[i].addEventListener('click', function () {
    switchPage(i);
  });
}
