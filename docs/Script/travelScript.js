const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');
const loginBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');
const menu = document.querySelector('#menu-bar');
const navBar = document.querySelector('.navBar');
const videoBtn = document.querySelectorAll('.video-btn');

window.onscroll = ()=> {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    navBar.classList.remove('active');
}

menu.addEventListener('click', ()=> {
   menu.classList.toggle('fa-times');
   navBar.classList.toggle('active');
});
searchBtn.addEventListener('click', ()=> {
   searchBtn.classList.toggle('fa-times');
   searchBar.classList.toggle('active');
});
loginBtn.addEventListener('click', ()=> {
   loginForm.classList.add('active');
});
formClose.addEventListener('click', ()=> {
  
   loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
  btn.addEventListener('click',() => {
    document.querySelector('.video-controls .active').classList.remove('active');
    btn.classList.add('active');
    let dataSrc = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = dataSrc;
  });
});

var swiper = new Swiper(".review-slider", {
   spaceBetween: 20,
   loop: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});