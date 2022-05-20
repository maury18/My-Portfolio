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
  const backOpacity = document.querySelector('.info-back-image');

  project.addEventListener('click', () => {
    overFlowY.style.overflowY = ('scroll');
    links.style.display = ('none');
    headerShows.style.marginTop = ('0');
    infoBackDisable.style.display = ('block');
    blur.classList.remove('blur');
    blur2.classList.remove('blur');
    blur3.classList.remove('blur');
    blur4.classList.remove('blur');
    backOpacity.classList.remove('info-back-opacity');
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
    backOpacity.classList.remove('info-back-opacity');
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
    backOpacity.classList.remove('info-back-opacity');
  });
};
linksSection();

const cardProjects = [{
  id: 1,
  name: 'Tonic',
  heading1: 'CANOPY',
  heading2: 'Back End Dev',
  heading3: '2015',
  image: './img/Mobile-version/popup/image1.png',
  shortdescription: ' A daily selection of privately <br /> personalized reads; no accounts or <br /> sign-ups required.',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  languages: ['html', 'css', 'javaScript'],
  live: 'See live',
  source: 'See source',
},

{
  id: 2,
  name: 'Multi-Post Stories',
  heading1: 'CANOPY',
  heading2: 'Back End Dev',
  heading3: '2015',
  image: './img/Mobile-version/popup/image2.png',
  shortdescription: ' A daily selection of privately <br /> personalized reads; no accounts or <br /> sign-ups required.',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  languages: ['html', 'css', 'javaScript'],
  live: 'See live',
  source: 'See source',
},

{
  id: 3,
  name: 'Tonic',
  heading1: 'CANOPY',
  heading2: 'Back End Dev',
  heading3: '2015',
  image: './img/Mobile-version/popup/image3.png',
  shortdescription: ' A daily selection of privately <br /> personalized reads; no accounts or <br /> sign-ups required.',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  languages: ['html', 'css', 'javaScript'],
  live: 'See live',
  source: 'See source',
},

{
  id: 4,
  name: 'Multi-Post Stories',
  heading1: 'CANOPY',
  heading2: 'Back End Dev',
  heading3: '2015',
  image: './img/Mobile-version/popup/image4.png',
  shortdescription: ' A daily selection of privately <br /> personalized reads; no accounts or <br /> sign-ups required.',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  languages: ['html', 'css', 'javaScript'],
  live: 'See live',
  source: 'See source',
},
];

const body = document.querySelector('main');
const createCard = document.createElement('div');
createCard.innerHTML = `<div class="project-2 container">
<div class="project-display">
    <img src="./img/work1.png" alt="First project image" class="project-1--img" />
    <div class="project-description">
        <h3 class="project-1--heading">Tonic</h3>
        <ul class="project-1--paragraph">
            <li class="project1--paragraph1">Canopy</li>
            <li><img src="./img/Counter.png" alt="" class="project-1-icon1" </li>
            <li class="project1--paragraph2">Back end dev</li>
            <li><img src="./img/Counter.png" alt="" class="project-1-icon1" </li>
            <li class="project1--paragraph3">2015</li>
        </ul>
        <p class="project1--paragraph4">
            A daily selection of privately <br />
            personalized reads; no accounts or
            <br />
            sign-ups required.
        </p>
        <ul class="project-1--paragraph2">
            <li class="project1--link1">Html</li>
            <li class="project1--link1">Css</li>
            <li class="project1--link1">Java script</li>
        </ul>
        <button class="project1-link4" type="button">See project</button>
    </div>
</div>
</div>

<div class="project-2 container">
<div class="project-display">
    <img src="./img/work2.png" alt="Second project image" class="project-1--img" />
    <div class="project-description">
        <h3 class="project-1--heading">
            Multi-Post <br />
            Stories
        </h3>
        <div class="project-1--paragraph">
            <p class="project1--paragraph1">Canopy</p>
            <img src="./img/Counter.png" alt="" class="project-1-icon1" />
            <p class="project1--paragraph2">Back end dev</p>
            <img src="./img/Counter.png" alt="" class="project-1-icon2" />
            <p class="project1--paragraph3">2015</p>
        </div>
        <p class="project1--paragraph4">
            A daily selection of privately <br />
            personalized reads; no accounts or
            <br />
            sign-ups required.
        </p>
        <ul class="project-1--paragraph2">
            <li class="project1--link1">Html</li>
            <li class="project1--link1">Css</li>
            <li class="project1--link1">Java script</li>
        </ul>
        <button class="project1-link4" type="button">See project</button>
    </div>
</div>
</div>

<div class="project-2 container">
<div class="project-display">
    <img src="./img/work3.png" alt="Third project image" class="project-1--img" />
    <div class="project-description">
        <h3 class="project-1--heading">Tonic</h3>
        <div class="project-1--paragraph">
            <p class="project1--paragraph1">Canopy</p>
            <img src="./img/Counter.png" alt="" class="project-1-icon1" />
            <p class="project1--paragraph2">Back end dev</p>
            <img src="./img/Counter.png" alt="" class="project-1-icon2" />
            <p class="project1--paragraph3">2015</p>
        </div>
        <p class="project1--paragraph4">
            A daily selection of privately <br />
            personalized reads; no accounts or
            <br />
            sign-ups required.
        </p>
        <ul class="project-1--paragraph2">
            <li class="project1--link1">Html</li>
            <li class="project1--link1">Css</li>
            <li class="project1--link1">Java script</li>
        </ul>
        <button class="project1-link4" type="button">See project</button>
    </div>
</div>
</div>

<div class="project-2 container">
<div class="project-display">
    <img src="./img/work4.png" alt="Fourth project image" class="project-1--img" />
    <div class="project-description">
        <h3 class="project-1--heading">
            Multi-Post <br />
            Stories
        </h3>
        <div class="project-1--paragraph">
            <p class="project1--paragraph1">Canopy</p>
            <img src="./img/Counter.png" alt="" class="project-1-icon1" />
            <p class="project1--paragraph2">Back end dev</p>
            <img src="./img/Counter.png" alt="" class="project-1-icon2" />
            <p class="project1--paragraph3">2015</p>
        </div>
        <p class="project1--paragraph4">
            A daily selection of privately <br />
            personalized reads; no accounts or
            <br />
            sign-ups
        </p>

        <ul class="project-1--paragraph2">
            <li class="project1--link1">Html</li>
            <li class="project1--link1">Css</li>
            <li class="project1--link1">Java script</li>
        </ul>
        <button class="project1-link4" type="button">See project</button>
    </div>
</div>
</div>`;
body.appendChild(createCard);
const showPopup = document.querySelectorAll('.project1-link4');
for (let i = 0; i < cardProjects.length; i += 1) {
  showPopup[i].addEventListener('click', () => {
    const divPopup = document.createElement('div');
    divPopup.classList.add('popup');
    divPopup.innerHTML = `
       <div class="popup-background">
    <div class="close-popup">
        <h3 class="popup-tonic">${cardProjects[i].name}</h3>
        <button class="popup1-close-window">X</button>
    </div>
    <ul class="popup-list1">
        <li class="popup-canopy">${cardProjects[i].heading1}</li>
        <li class="popup-circle"><img src="/img/Mobile-version/popup/circle.svg" alt=""></li>
        <li class="popup-back-end">${cardProjects[i].heading2}</li>
        <li class="popup-circle"><img src="/img/Mobile-version/popup/circle.svg" alt=""></li>
        <li class="popup-year">${cardProjects[i].heading3}</li>
    </ul>
    <img src=${cardProjects[i].image} alt="" class="popup-img">
    <div class="desktop-display-left">
        <p class="popup-paragraph">${cardProjects[i].description}</p>
        <div class="desktop-display-right">
            <ul class="popup-list2">
                <li class="popup-languajes">${cardProjects[i].languages[0]}</li>
                <li class="popup-languajes"> ${cardProjects[i].languages[1]}</li>
                <li class="popup-languajes">${cardProjects[i].languages[2]}</li>
            </ul>
            <div class="popup-buttons">
                <div class="popup-seelive">
                    <a href="#" class="popup-link">${cardProjects[i].live}</a>
                    <img src="/img/Mobile-version/popup/see-live.svg" alt="">
                </div>
                <div class="popup-see-src">
                    <a href="https://github.com/maury18" class="popup-link">${cardProjects[i].source}</a>
                    <img src="/img/Mobile-version/popup/see-source.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    body.appendChild(divPopup);
    const closePopup = document.querySelector('.popup1-close-window');
    closePopup.addEventListener('click', () => {
      body.removeChild(divPopup);
    });
  });
}
