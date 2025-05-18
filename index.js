const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,  // change to 2 or 3 for multi-slide
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Uncomment below for multi-slide view
  /*
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  */
});

  const link = document.querySelector('#vahicle');
  const menu = document.querySelector('#manu');
  link.addEventListener('mouseover', function(){
    menu.style.display = 'block';
    menu.style.height = '400px';
    menu.style.width = '100%';
    menu.style.display = 'flex';
    menu.style.flexDirection = 'row';
    menu.style.justifyContent = 'space-between';
    menu.style.alignItems = 'center';
            setTimeout(() => menu.style.opacity = '1', 0);
   });

link.addEventListener('mouseleave', function(){
            menu.style.opacity = '0';
  setTimeout(() => menu.style.display = 'none', 500);
});
        

 const link1 = document.querySelector('#Energy');
  const menu1 = document.querySelector('#manu1');
  link1.addEventListener('mouseover', function(){
    menu1.style.display = 'block';
    menu1.style.height = '400px';
    menu1.style.width = '100%';
    menu1.style.display = 'flex';
    menu1.style.flexDirection = 'row';
    menu1.style.justifyContent = 'space-between';
    menu1.style.alignItems = 'center';
    setTimeout(() => menu1.style.opacity = '1', 0);
   });

link1.addEventListener('mouseleave', function(){
  menu1.style.opacity = '0';
  setTimeout(() => menu1.style.display = 'none', 500);
});

const link2 = document.querySelector('#Charging');
const menu2 = document.querySelector('#menu2');
link2.addEventListener('mouseenter', function() {
  menu2.style.display = 'block';
  menu2.style.height = '400px';
  menu2.style.width = '100%';
  menu2.style.display = 'flex';
  menu2.style.flexDirection = 'row';
  menu2.style.justifyContent = 'space-between';
  menu2.style.alignItems = 'center';
  setTimeout(() => menu2.style.opacity = '1', 0);
});

link2.addEventListener('mouseleave', function() {
  menu2.style.opacity = '0';
  setTimeout(() => menu2.style.display = 'none', 500);
});

const link3 = document.querySelector('#Discover');
const menu3 = document.querySelector('#menu3');
link3.addEventListener('mouseenter', function() {
  menu3.style.display = 'block';
  menu3.style.height = '400px';
  menu3.style.width = '100%';
  menu3.style.display = 'flex';
  menu3.style.flexDirection = 'row';
  menu3.style.justifyContent = 'space-between';
  menu3.style.alignItems = 'center';
  setTimeout(() => menu3.style.opacity = '1', 0);
});

link3.addEventListener('mouseleave', function() {
  menu3.style.opacity = '0';
  setTimeout(() => menu3.style.display = 'none', 500);
});

const link4 = document.querySelector('#Shop');
  const menu4 = document.querySelector('#menu4');
  link4.addEventListener('mouseover', function(){
    menu4.style.display = 'block';
    menu4.style.height = '400px';
    menu4.style.width = '100%';
    menu4.style.display = 'flex';
    menu4.style.flexDirection = 'row';
    menu4.style.justifyContent = 'space-between';
    menu4.style.alignItems = 'center';
    setTimeout(() => menu4.style.opacity = '1', 0);
   });

link4.addEventListener('mouseleave', function(){
  menu4.style.opacity = '0';
  setTimeout(() => menu4.style.display = 'none', 500);
});
