/* SHOW MENU BUTTON */
const navSlide = () => {
  const icon = document.querySelector('#icon');
  const nav = document.querySelector('.nav-links');
  const header = document.querySelector('.header');
  const overFlowY = document.querySelector('html');
  const backOpacity = document.querySelector('.info-back-image');
  const infoBackDisable = document.querySelector('.info-back-image');
  const blur = document.querySelector('.info-heading');
  const blur2 = document.querySelector('.info-paragraph');
  const blur3 = document.querySelector('.info-heading2');
  const blur4 = document.querySelector('.icons');
  icon.addEventListener('click', () => {
    nav.style.display = ('flex');
    nav.style.display = ('flex');
    header.style.marginTop = ('-8rem');
    overFlowY.style.overflowY = ('hidden');
    backOpacity.classList.add('info-back-opacity');
    infoBackDisable.style.display = ('none');
    blur.classList.add('blur');
    blur2.classList.add('blur');
    blur3.classList.add('blur');
    blur4.classList.add('blur');
  });
};

/* CLOSE MENU BUTTON */

navSlide();

const navClose = () => {
  const closeMenu = document.querySelector('.close-menu');
  const navClose = document.querySelector('.nav-links');
  const headerShows = document.querySelector('.header');
  const overFlowY = document.querySelector('html');
  const backOpacity = document.querySelector('.info-back-image');
  const infoBackDisable = document.querySelector('.info-back-image');
  const blur = document.querySelector('.info-heading');
  const blur2 = document.querySelector('.info-paragraph');
  const blur3 = document.querySelector('.info-heading2');
  const blur4 = document.querySelector('.icons');

  closeMenu.addEventListener('click', () => {
    navClose.style.display = ('none');
    headerShows.style.marginTop = ('0');
    overFlowY.style.overflowY = ('scroll');
    backOpacity.classList.remove('info-back-opacity');
    infoBackDisable.style.display = ('block');
    blur.classList.remove('blur');
    blur2.classList.remove('blur');
    blur3.classList.remove('blur');
    blur4.classList.remove('blur');
  });
};
navClose();

/* SECTIONS BUTTONS */
const linksSection = () => {
  const project = document.querySelector('.project-js');
  const about = document.querySelector('.about-js');
  const form = document.querySelector('.form-js');
  const links = document.querySelector('.nav-links');
  const overFlowY = document.querySelector('html');
  const headerShows = document.querySelector('.header');
  const infoBackDisable = document.querySelector('.info-back-image');
  const blur = document.querySelector('.info-heading');
  const blur2 = document.querySelector('.info-paragraph');
  const blur3 = document.querySelector('.info-heading2');
  const blur4 = document.querySelector('.icons');

  project.addEventListener('click', () => {
    overFlowY.style.overflowY = ('scroll');
    links.style.display = ('none');
    headerShows.style.marginTop = ('0');
    infoBackDisable.style.display = ('block');
    blur.classList.remove('blur');
    blur2.classList.remove('blur');
    blur3.classList.remove('blur');
    blur4.classList.remove('blur');
  });

  about.addEventListener('click', () => {
    overFlowY.style.overflowY = ('scroll');
    links.style.display = ('none');
    headerShows.style.marginTop = ('0');
    infoBackDisable.style.display = ('block');
    blur.classList.remove('blur');
    blur2.classList.remove('blur');
    blur3.classList.remove('blur');
    blur4.classList.remove('blur');
  });

  form.addEventListener('click', () => {
    overFlowY.style.overflowY = ('scroll');
    links.style.display = ('none');
    headerShows.style.marginTop = ('0');
    infoBackDisable.style.display = ('block');
    blur.classList.remove('blur');
    blur2.classList.remove('blur');
    blur3.classList.remove('blur');
    blur4.classList.remove('blur');
  });
};
linksSection();
