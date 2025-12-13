
import 'what-input';
import $ from 'jquery';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import 'swiper/css';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


const playButton = document.getElementById("play-pause");
const video = document.getElementById("video");
function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}
video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);

video.addEventListener("play", () => {
  playButton.style.opacity = 0;
});

video.addEventListener("pause", () => {
  playButton.style.opacity = 1;
});


const header = document.querySelector('header');
const hamburgerMenuBtn = document.querySelector('[data-hamburger]');
const iconMenu = document.querySelector('.header__hamburger-icon');
const mobileMenu = document.querySelector('[data-mobile-menu]');

let isScreenForMobileMenu = window.innerWidth < 1000;

window.addEventListener('resize', () => {
  isScreenForMobileMenu = window.innerWidth < 1000;
});

if (mobileMenu && hamburgerMenuBtn && iconMenu) {
  hamburgerMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
    iconMenu.classList.toggle('close');
    document.documentElement.classList.toggle('no-scroll');
  });
}

const setHeaderStyle = (visible) => {
  if (!header) return;

  if (visible) {
    header.style.backgroundColor = '#ffffffe8';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.backdropFilter = 'none';
  }
};

window.addEventListener('scroll', () => {
  const scrolledPastScreen = window.scrollY > window.innerHeight;
  const scrolledEnough = window.scrollY > 70;

  setHeaderStyle(
    scrolledPastScreen || scrolledEnough || isScreenForMobileMenu
  );
});


const sliderEvents = document.querySelector('[data-slider-events]');
if(sliderEvents) {
  const swiper = new Swiper(sliderEvents, {
    grabCursor: true,
    loop: true,
    modules: [Navigation],
    infinite: true,
    pauseOnHover: false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".slider__btn-next",
      prevEl: ".slider__btn-prev",
    },
  })
}

const sliderDillers = document.querySelector('[data-slider-dillers]');
if(sliderDillers) {
  const swiper = new Swiper(sliderDillers, {
    grabCursor: true,
    spaceBetween: 16,
    loop: true,
    modules: [Navigation],
    infinite: true,
    pauseOnHover: false,
    navigation: {
      nextEl: ".dealer-slider__btn-next",
      prevEl: ".dealer-slider__btn-prev",
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    }
  })
}