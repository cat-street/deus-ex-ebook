const article = document.querySelectorAll('.article');
const navButton = document.querySelectorAll('.navigation__link');
const articleImage = document.querySelector('.article__image');
const lightbox = document.querySelector('.lightbox');

const switchPage = page => {
  for (let i = 0; i < navButton.length; i++) {
    if (i === page) {
      navButton[i].textContent = '●';
      navButton[i].style.pointerEvents = 'none';
      article[i].hidden = false;
      article[i].style.opacity = 0;
      window.setTimeout(function () { // for CSS transition
        article[i].style.opacity = 1;
      }, 200);
    } else {
      navButton[i].textContent = '○';
      navButton[i].style.pointerEvents = 'auto';
      article[i].hidden = true;
    }
  }
}

const toggleLightbox = () => lightbox.classList.toggle('lightbox_hidden');

for (let i = 0; i < navButton.length; i++) {
  navButton[i].addEventListener('click', switchPage.bind(this, i));
}
articleImage.addEventListener('click', toggleLightbox);
lightbox.addEventListener('click', toggleLightbox);
