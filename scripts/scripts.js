/* SHOW MENU BUTTON */
const navSlide = ()=>{
    const icon= document.querySelector('#icon');
    const nav = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    const overFlowY = document.querySelector('body');
    const backOpacity = document.querySelector('.info-back-image');
    const infoBack_disable = document.querySelector('.info-back-image');
    console.log(icon);
    icon.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        header.style.marginTop = ('-8rem');
        overFlowY.style.overflowY = ('hidden');
        backOpacity.classList.add('info-back-opacity');
        infoBack_disable.style.display = ('none');

    });
}

/* CLOSE MENU BUTTON */

navSlide();

const navClose= ()=>{
   const closeMenu = document.querySelector('.close-menu');
   const navClose = document.querySelector('.nav-links');
   const headerShows = document.querySelector('.header');
   const overFlowY = document.querySelector('body');
   const backOpacity = document.querySelector('.info-back-image');
   const infoBack_disable = document.querySelector('.info-back-image');
   closeMenu.addEventListener('click',()=>{
   navClose.classList.remove('nav-active');
   headerShows.style.marginTop = ('0');
   overFlowY.style.overflowY = ('scroll');
   backOpacity.classList.remove('info-back-opacity');
   infoBack_disable.style.display = ('block');

   })
}
navClose();

/* SECTIONS BUTTONS */

const linksSection = ()=>{
    const project = document.querySelector('.project-js');
    const about = document.querySelector('.about-js');
    const form = document.querySelector('.form-js');
    const links = document.querySelector('.nav-links')
    const overFlowY = document.querySelector('body');
    const headerShows = document.querySelector('.header');

    project.addEventListener('click',()=>{
    overFlowY.style.overflowY = ('scroll');
    links.classList.remove('nav-active');
    headerShows.style.marginTop = ('0');
    })
    

    about.addEventListener('click',()=>{
        overFlowY.style.overflowY = ('scroll');
        links.classList.remove('nav-active');
        headerShows.style.marginTop = ('0');
        })

    form.addEventListener('click',()=>{
            overFlowY.style.overflowY = ('scroll');
            links.classList.remove('nav-active');
            headerShows.style.marginTop = ('0');
            })

}
linksSection();
