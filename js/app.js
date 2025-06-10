// 
// Разработанные решения

new Swiper(".developedScroll", {
  spaceBetween: 32,
  navigation: {
    nextEl: ".rightDev",
    prevEl: ".leftDev",
  },
  keyboard: true,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 1.15,
    },
    320: {
      slidesPerView: 1,
    }
  },
});
// 
// Схема

new Swiper(".schemeScroll", {
  spaceBetween: 32,
  navigation: {
    nextEl: ".rightScheme",
    prevEl: ".leftScheme",
  },
  keyboard: true,
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    500: {
      spaceBetween: 16,
      slidesPerView: 1.5,
    },
    320: {
      spaceBetween: 16,
      slidesPerView: 1.5,
    }
  },
});

// 
// Отзывы

new Swiper(".review", {
  spaceBetween: 32,
  navigation: {
    nextEl: ".rightRev",
    prevEl: ".leftRev",
  },
  keyboard: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

// 
// Попап

let popup = document.getElementById('popup');
let clsPopup = document.getElementById('clsPopup');
let callPopup = document.querySelectorAll('.callPopup');

callPopup.forEach(function(element) {
  element.addEventListener('click', function() {
    popup.classList.add('show');
  });
});

clsPopup.addEventListener('click', function() {
  popup.classList.remove('show');
});
